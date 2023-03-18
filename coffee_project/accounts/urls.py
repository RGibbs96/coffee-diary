from django.urls import path, include
from .views import get_users, get_user_from_email

urlpatterns = [
    path("auth/", include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path("users/",get_users, name="get_users"),
    path("users/<str:email>/", get_user_from_email, name="get_user_from_email"),

]
