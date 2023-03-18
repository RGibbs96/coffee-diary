from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import CustomUserEncoder
import token

# Create your views here.

from .models import CustomUser

@require_http_methods(["GET"])
def get_users(request):
    if request.method == "GET":
        user = request.user
        print(user)
        users = CustomUser.objects.all()
        return JsonResponse(
            {"users":users},
            encoder=CustomUserEncoder
        )
@require_http_methods(["POST"])
def get_user_from_email(request,email):
    if request.method == "GET":
        email += "@gmail.com"
        user = CustomUser.objects.get(email=email)

        return JsonResponse(
            {"user":user},
            encoder=CustomUserEncoder
        )
