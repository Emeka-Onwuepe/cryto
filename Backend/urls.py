from rest_framework import routers
from .Api import LoginUser,RegisterUser,DashBoard,WebhookApi
from django.urls import path
from knox import views as KnoxView
router = routers.DefaultRouter()

urlpatterns = [
    
    path('register',RegisterUser.as_view(),name="RegisterUser"),
    path('login', LoginUser.as_view(), name="login"),
    path('logout', KnoxView.LogoutView.as_view(), name="knox_logout"),
    path('dashboard', DashBoard.as_view(), name="login"),
    path('Webhookapi', WebhookApi.as_view(), name="wook"),
    # path('dashboard', Dashboard.as_view(), name="dashbord"),
]

urlpatterns += router.urls
