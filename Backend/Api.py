from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm,PasswordResetForm
from django.contrib.auth import login,logout
import os
User=get_user_model()
from rest_framework import viewsets,permissions,generics,status
from rest_framework.response import Response
from .models import User, Deposit,WithDraw,Accounts
from .serializer import (DepositSerializer,WithDrawSerializer,AccountSerializer,
GetUserSerializer,UserSerializer,LoginSerializer)
from knox.models import AuthToken
from datetime import timedelta
from coinbase_commerce.client import Client


class RegisterUser(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        acc = Accounts.objects.create(account=user)
        acc.save()
        accSeri=AccountSerializer(acc)
        _,token=AuthToken.objects.create(user)
        returnedUser=GetUserSerializer(user)
        return Response({"user":returnedUser.data,"token":token,"account":accSeri.data})


class LoginUser(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        # x_forwarded_for= request.META.get("HTTP_X_FORWARDED_FOR")
        # if x_forwarded_for:
        #     ip = x_forwarded_for.split(",")[0]
        # else:
        #     ip = request.META.get("REMOTE_ADDR")
            
        publisher=''
        serializer = self.get_serializer(data=request.data['data'])
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        returnedUser = GetUserSerializer(user)
        acc= Accounts.objects.get(account=int(returnedUser.data["id"]))
        accSeri=AccountSerializer(acc)
        return Response({"user": returnedUser.data, "token": token,"publisher":publisher ,"account":accSeri.data})


class DashBoard(generics.GenericAPIView):
    serializer_class=DepositSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        x_forwarded_for= request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR") 
        return Response({"ip":ip})

    def post(self, request,*args, **kwargs):
        recieved=request.data
        action = request.data["action"]
        if action == "GET_ACCOUNT":
            account= Accounts.objects.get(account=int(request.user.id))
            widthdraws= account.withdraw_history
            deposits= account.deposit_history
            acccountData= AccountSerializer(account)
            widthdrawData= WithDrawSerializer(widthdraws, many=True)
            depositData= DepositSerializer(deposits,many=True)
            return Response({"deposits": depositData.data, "withdraws": widthdrawData.data,"account":acccountData.data})
        if action == "DEPOSIT":
            print("hello")
            user=User.objects.get(id=request.user.id)
            account= Accounts.objects.get(account=int(request.user.id))
            charge_info = {
                "name": "FutexInvest",
                "metadata":{"name": f'{user.first_name} {user.last_name}' ,"email":user.email},
                "description": f"Payment for {recieved['packages']} package",
                "local_price": {
                    "amount": recieved["amount"],
                    "currency": "USD"
                },
                "pricing_type": "fixed_price"

            }
            print(charge_info)
            API_KEY = os.environ.get("API_KEY")
            client = Client(api_key=API_KEY)
            print(client)
            charge = client.charge.create(**charge_info)
            print(charge)
            deposit= Deposit.objects.create(amount=recieved["amount"],date=charge["created_at"],
            chain_id=charge["id"],status=charge['timeline'][0]['status'])
            deposit=deposit.save()
            return Response({"url":"hello"})


