from django.urls import path

from .views import (
    user_signup,
)

urlpatterns = [
    path("user/",user_signup,name="user_signup"),
]
