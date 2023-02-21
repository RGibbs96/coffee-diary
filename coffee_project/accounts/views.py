from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import User
from .encoders import UserEncoder

from argon2 import PasswordHasher

def user_signup(request):
    if request.method == "POST":
        content = json.loads(request.body)
        ph = PasswordHasher()
        hashedPassword = ph.hash(content["password"])
        content["password"] = hashedPassword
        content["is_verified"] = False
        content["is_active"] = True
        try:
            user = User.objects.create(**content)
            return JsonResponse(
                user,
                encoder=UserEncoder,
                safe=False,
            )
        except IntegrityError as e:
            return JsonResponse({"message": str(e)})
        except ValueError as e:
            return JsonResponse({"message": str(e)})

    else:
        pass
