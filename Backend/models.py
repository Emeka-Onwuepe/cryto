from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser,PermissionsMixin)
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
# from django.utils import timezone
import datetime
import re
from PIL import Image
from math import floor
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys

class UserManager(BaseUserManager):
    def create_user(self,email,first_name='null',last_name='null', password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email), first_name=first_name,last_name=last_name)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, email, password):
        user = self.create_user(email,password=password,first_name="SITE",last_name="CREATOR",)
        user.is_admin = True
        user.staff=True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser,PermissionsMixin):
    first_name =models.CharField(verbose_name='first name', max_length=255)
    last_name =models.CharField(verbose_name='last name', max_length=255)
    email = models.EmailField(verbose_name='email address',max_length=255,unique=True,)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    staff=models.BooleanField(default=False)
    owner=models.BooleanField(default=False)
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    def has_perm(self, perm, obj=None):
        if not self.is_admin and self.staff:
            if perm =="backend.add_user" or perm=="backend.change_user" or perm=="backend.delete_user":
                return False
            else:
                return True
        else:
            return True
    def has_module_perms(self, app_label):
        if not self.is_admin and self.staff:
            if app_label =="knox" or app_label=="auth" :
                return False
            else:
                return True
        else:
            return True
    @property
    def is_staff(self):
        return self.staff

class WithDraw(models.Model):
    amount = models.CharField(verbose_name="amount",max_length = 150)
    date = models.DateTimeField(auto_now=False, auto_now_add=False)
    pending = models.BooleanField(default=True)
    success= models.BooleanField(default=False)
    chain_id= models.CharField(verbose_name="chain_id",max_length = 150)
    status= models.CharField(verbose_name="status",max_length=150)
    
    

    def __str__(self):
        return self.amount

    class Meta:
        managed = True
        verbose_name = 'WithDraw'
        verbose_name_plural = 'WithDraws'


class Deposit(models.Model):
    amount = models.CharField(verbose_name="amount",max_length = 150)
    date = models.DateTimeField(auto_now=False, auto_now_add=False)
    pending = models.BooleanField(default=True)
    success = models.BooleanField(default=False)
    chain_id= models.CharField(verbose_name="chain_id",max_length = 150)
    status= models.CharField(verbose_name="status",max_length=150)
    
    

    def __str__(self):
        return self.amount
    class Meta:
        managed = True
        verbose_name = 'Deposit'
        verbose_name_plural = 'Deposits'

class Accounts(models.Model):
    account = models.ForeignKey(User, on_delete=models.CASCADE, related_name="accounts")
    amount = models.CharField(verbose_name='amounts', max_length=255,default="0.00")
    withdraw_history = models.ManyToManyField(WithDraw,related_name='withdraws')
    deposit_history = models.ManyToManyField(Deposit,related_name="deposits")
    earned_profits = models.CharField(max_length = 150,default="0.00")
    
    
    
    def __str__(self):
        return self.account

    class Meta:
        managed = True
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'
