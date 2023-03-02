from coffee.common.json import ModelEncoder
from .models import CustomUser

class CustomUserEncoder(ModelEncoder):
    model = CustomUser
    properties = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "is_verified",
        "is_active",
    ]
