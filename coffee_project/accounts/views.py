from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import CustomUserEncoder

# Create your views here.

from .models import CustomUser

@require_http_methods(["POST"])
def create_user(request):
    if request.method == "POST":
        content = json.loads(request.body)
        print(content)

        try:
            user = CustomUser.objects.create_user(username=content["username"],email=content["email"],password=content["password"])
            print(user)
            user.first_name = content["first_name"]
            user.last_name = content["last_name"]
            print("hello")
            user.save()
            return JsonResponse(
                {"user":user},
                encoder=CustomUserEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message":"Could not create the user"}
            )
            response.status_code = 400
            return response
