from django.urls import path

from .views import (
    api_origins,
    api_roasters,
    api_coffee_beans,
    api_water_blends,
    api_waterblends_by_user,
    api_brew_methods,
    api_grinders,
    api_grinders_by_user,
    api_brewers,
    api_brewers_by_user,
    api_creamers,
    api_sweeteners,
    api_brewed_coffees,
    api_brewed_coffees_by_user,
)

urlpatterns = [
    path("origins/",api_origins,name="api_origins"),
    path("roasters/",api_roasters,name="api_roasters"),
    path("coffeebeans/",api_coffee_beans,name="api_coffee_beans"),
    path("waterblends/",api_water_blends,name="api_water_blends"),
    path("waterblends/<int:pk>/",api_waterblends_by_user,name="api_waterblends_by_user"),
    path("brewmethods/",api_brew_methods,name="api_brew_methods"),
    path("grinders/",api_grinders,name="api_grinders"),
    path("grinders/<int:pk>/",api_grinders_by_user,name="api_grinders_by_user"),
    path("brewers/",api_brewers,name="api_brewers"),
    path("brewers/<int:pk>/",api_brewers_by_user,name="api_brewers_by_user"),
    path("creamers/",api_creamers,name="api_creamers"),
    path("sweeteners/",api_sweeteners,name="api_sweeteners"),
    path("brewedcoffees/",api_brewed_coffees,name="api_brewed_coffees"),
    path("brewedcoffees/<int:pk>/",api_brewed_coffees_by_user,name="api_brewed_coffees_by_user"),
]
