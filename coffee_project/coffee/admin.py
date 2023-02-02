from django.contrib import admin
from .models import (
    Origin,
    Roaster,
    CoffeeBean,
    WaterBlend,
    BrewMethod,
    Grinder,
    Brewer,
    Creamer,
    Sweetener,
    BrewedCoffee
    )

admin.site.register(Origin)
admin.site.register(Roaster)
admin.site.register(CoffeeBean)
admin.site.register(WaterBlend)
admin.site.register(BrewMethod)
admin.site.register(Grinder)
admin.site.register(Brewer)
admin.site.register(Creamer)
admin.site.register(Sweetener)
admin.site.register(BrewedCoffee)
