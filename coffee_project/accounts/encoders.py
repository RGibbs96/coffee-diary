from coffee.common.json import ModelEncoder
from .models import User

class UserEncoder(ModelEncoder):
    model = User
    properties = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "is_active",
        "is_verified",
    ]
