from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

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
    BrewedCoffee,
    )
from .encoders import (
    OriginEncoder,
    RoasterEncoder,
    CoffeeBeanEncoder,
    WaterBlendEncoder,
    BrewMethodEncoder,
    GrinderEncoder,
    BrewerEncoder,
    CreamerEncoder,
    SweetenerEncoder,
    BrewedCoffeeEncoder,
)

@require_http_methods(["GET","POST"])
def api_origins(request):
    if request.method == "GET":
        origins = Origin.objects.all()
        return JsonResponse(
            {"origins":origins},
            encoder = OriginEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            origin = Origin.objects.create(**content)
            return JsonResponse(
                {"origin":origin},
                encoder=OriginEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the origin"}
                )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_roasters(request):
    if request.method == "GET":
        roasters = Roaster.objects.all()
        return JsonResponse(
            {"roasters":roasters},
            encoder=RoasterEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            roaster = Roaster.objects.create(**content)
            return JsonResponse(
                {"roaster":roaster},
                encoder=RoasterEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the roaster"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_coffee_beans(request):
    if request.method == "GET":
        coffee_beans = CoffeeBean.objects.all()
        return JsonResponse(
            {"coffee_beans": coffee_beans},
            encoder = CoffeeBeanEncoder
        )
    else:
        content = json.loads(request.body)
        origin1 = Origin.objects.get(id=content["origin_id1"])
        roaster = Roaster.objects.get(id=content["roaster_id"])
        content["origin1"] = origin1
        content["roaster"] = roaster
        if content["origin_id2"] != None:
            origin2 = Origin.objects.get(id=content["origin_id2"])
            content["origin2"] = origin2
        if content["origin_id3"] != None:
            origin3 = Origin.objects.get(id=content["origin_id3"])
            content["origin3"] = origin3
        del content["origin_id1"]
        del content["origin_id2"]
        del content["origin_id3"]
        del content["roaster_id"]
        print(content)
        coffee_bean = CoffeeBean.objects.create(**content)

        return JsonResponse(
            {"coffee_bean":coffee_bean},
            encoder=CoffeeBeanEncoder,
            safe=False,
        )

@require_http_methods(["GET","POST"])
def api_water_blends(request):
    if request.method == "GET":
        water_blends = WaterBlend.objects.all()
        return JsonResponse(
            {"water_blends": water_blends},
            encoder=WaterBlendEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            water_blend = WaterBlend.objects.create(**content)
            return JsonResponse(
                {"water_blend":water_blend},
                encoder=WaterBlendEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the water blend"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_brew_methods(request):
    if request.method == "GET":
        brew_methods = BrewMethod.objects.all()
        return JsonResponse(
            {"brew_methods":brew_methods},
            encoder=BrewMethodEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            brew_method = BrewMethod.objects.create(**content)
            return JsonResponse(
                {"brew_method":brew_method},
                encoder=BrewMethodEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the brew method"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_grinders(request):
    if request.method == "GET":
        grinders = Grinder.objects.all()
        return JsonResponse(
            {"grinders":grinders},
            encoder=GrinderEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            grinder = Grinder.objects.create(**content)
            return JsonResponse(
                {"grinder":grinder},
                encoder=GrinderEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the grinder"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_brewers(request):
    if request.method == "GET":
        brewers = Brewer.objects.all()
        return JsonResponse(
            {"brewers":brewers},
            encoder=BrewerEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            brewer = Brewer.objects.create(**content)
            return JsonResponse(
                {"brewer":brewer},
                encoder=BrewerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the brewer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_creamers(request):
    if request.method == "GET":
        creamers = Creamer.objects.all()
        return JsonResponse(
            {"creamers":creamers},
            encoder=CreamerEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            creamer = Creamer.objects.create(**content)
            return JsonResponse(
                {"creamer":creamer},
                encoder=CreamerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the creamer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_sweeteners(request):
    if request.method == "GET":
        sweeteners = Sweetener.objects.all()
        return JsonResponse(
            {"sweeteners":sweeteners},
            encoder=SweetenerEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            sweetener = Sweetener.objects.create(**content)
            return JsonResponse(
                {"sweetener":sweetener},
                encoder=SweetenerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sweetener"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","POST"])
def api_brewed_coffees(request):
    if request.method == "GET":
        brewed_coffees = BrewedCoffee.objects.all()
        return JsonResponse(
            {"brewed_coffees":brewed_coffees},
            encoder=BrewedCoffeeEncoder,
            )
    else:
        try:
            content = json.loads(request.body)
            method = BrewMethod.objects.get(id=content["method_id"])
            bean = CoffeeBean.objects.get(id=content["bean_id"])
            water = WaterBlend.objects.get(id=content["water_id"])
            grinder = Grinder.objects.get(id=content["grinder_id"])
            brewer = Brewer.objects.get(id=content["brewer_id"])
            content["method"] = method
            content["bean"] = bean
            content["water"] = water
            content["grinder"] = grinder
            content["brewer"] = brewer
            del content["method_id"]
            del content["bean_id"]
            del content["water_id"]
            del content["grinder_id"]
            del content["brewer_id"]

            print(content)

            brewed_coffee = BrewedCoffee.objects.create(**content)
            return JsonResponse(
                {"brewed_coffee":brewed_coffee},
                encoder=BrewedCoffeeEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the brewed coffee"}
            )
            response.status_code = 400
            return response
