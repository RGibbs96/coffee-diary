from .common.json import ModelEncoder

from .models import CoffeeBean, WaterBlend, BrewMethod, Grinder, Brewer, Creamer, Sweetener, BrewedCoffee, Origin, Roaster
from accounts.encoders import CustomUserEncoder

class OriginEncoder(ModelEncoder):
    model = Origin
    properties = [
        "id",
        "name",
    ]

class RoasterEncoder(ModelEncoder):
    model = Roaster
    properties = [
        "id",
        "name",
        "url",
    ]

class CoffeeBeanEncoder(ModelEncoder):
    model = CoffeeBean
    properties = [
        "id",
        "name",
        "picture_url",
        "elevation1",
        "elevation2",
        "roast_date",
        "roast_level",
        "roast_number",
        "process",
        "single_origin",
        "note1",
        "note2",
        "note3",
        "note4",
        "origin1",
        "origin2",
        "origin3",
        "roaster",
    ]
    encoders = {
        "origin1": OriginEncoder(),
        "origin2": OriginEncoder(),
        "origin3": OriginEncoder(),
        "roaster": RoasterEncoder(),
    }

class WaterBlendEncoder(ModelEncoder):
    model = WaterBlend
    properties = [
        "id",
        "name",
        "water_quantity_g",
        "baking_soda_quantity_g",
        "epsom_salt_quantity_g",
        "user",
    ]
    encoders = {
        "user": CustomUserEncoder(),
    }

class BrewMethodEncoder(ModelEncoder):
    model = BrewMethod
    properties = [
        "id",
        "name",
    ]

class GrinderEncoder(ModelEncoder):
    model = Grinder
    properties = [
        "id",
        "make",
        "model",
        "burrs",
        "user",
    ]
    encoders = {
        "user": CustomUserEncoder(),
    }

class BrewerEncoder(ModelEncoder):
    model = Brewer
    properties = [
        "id",
        "make",
        "model",
        "user",
    ]
    encoders = {
        "user": CustomUserEncoder(),
    }

class CreamerEncoder(ModelEncoder):
    model = Creamer
    properties = [
        "id",
        "name",
    ]

class SweetenerEncoder(ModelEncoder):
    model = Sweetener
    properties = [
        "id",
        "name",
    ]

class BrewedCoffeeEncoder(ModelEncoder):
    model = BrewedCoffee
    properties = [
        "id",
        "date_time_brewed",
        "user",
        "method",
        "bean",
        "water",
        "creamer",
        "sweetener",
        "grinder",
        "brewer",
        "coffee_dose_g",
        "liquid_yield_g",
        "total_brew_time_s",
        "grind_size",
        "water_temperature",
        "preinfusion",
        "preinfusion_time_s",
        "pressure_bar",
        "bloom",
        "bitterness",
        "acidity",
        "brightness",
        "sweetness",
        "body",
        "clarity",
        "rating",
        "general_notes",

    ]
    encoders = {
        "user": CustomUserEncoder(),
        "method": BrewMethodEncoder(),
        "bean": CoffeeBeanEncoder(),
        "water": WaterBlendEncoder(),
        "creamer": CreamerEncoder(),
        "sweetener": SweetenerEncoder(),
        "grinder": GrinderEncoder(),
        "brewer": BrewerEncoder(),
    }
