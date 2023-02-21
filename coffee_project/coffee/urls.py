from django.urls import path

from .views import (
    api_origins,
    api_roasters,
    api_coffee_beans,
    api_water_blends,
    api_brew_methods,
    api_grinders,
    api_brewers,
    api_creamers,
    api_sweeteners,
    api_brewed_coffees
)
from accounts.views import user_signup

urlpatterns = [
    path("origins/",api_origins,name="api_origins"),
    path("roasters/",api_roasters,name="api_roasters"),
    path("coffeebeans/",api_coffee_beans,name="api_coffee_beans"),
    path("waterblends/",api_water_blends,name="api_water_blends"),
    path("brewmethods/",api_brew_methods,name="api_brew_methods"),
    path("grinders/",api_grinders,name="api_grinders"),
    path("brewers/",api_brewers,name="api_brewers"),
    path("creamers/",api_creamers,name="api_creamers"),
    path("sweeteners/",api_sweeteners,name="api_sweeteners"),
    path("brewedcoffees/",api_brewed_coffees,name="api_brewed_coffees"),
]
