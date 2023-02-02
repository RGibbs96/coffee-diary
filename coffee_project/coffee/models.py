from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Origin(models.Model):
    name = models.CharField(max_length=100)

class Roaster(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=500)

class CoffeeBean(models.Model):
    name = models.CharField(max_length=100)
    picture_url = models.URLField(max_length=500)
    roaster = models.ForeignKey(
        Roaster,
        related_name="roaster",
        on_delete=models.PROTECT,
    )
    roast_date = models.DateField()
    roast_level = models.CharField(max_length=100)
    roast_number = models.IntegerField(
        validators = [
            MaxValueValidator(10),
            MinValueValidator(1)
        ],
        null=True,
        blank=True,
    )
    elevation1 = models.PositiveSmallIntegerField(null=True, blank=True)
    elevation2 = models.PositiveSmallIntegerField(null=True, blank=True)
    process = models.CharField(max_length=200,null=True, blank=True)
    single_origin = models.BooleanField(default=True)
    origin1 = models.ForeignKey(
        Origin,
        related_name="origin1",
        on_delete=models.PROTECT,
    )
    origin2 = models.ForeignKey(
        Origin,
        related_name="origin2",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    origin3 = models.ForeignKey(
        Origin,
        related_name="origin3",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    note1 = models.CharField(max_length=200)
    note2 = models.CharField(max_length=200,null=True, blank=True)
    note3 = models.CharField(max_length=200,null=True, blank=True)
    note4 = models.CharField(max_length=200,null=True, blank=True)

class WaterBlend(models.Model):
    name = models.CharField(max_length=100)
    water_quantity_g = models.PositiveIntegerField()
    baking_soda_quantity_g = models.FloatField(null=True, blank=True)
    epsom_salt_quantity_g = models.FloatField(null=True, blank=True)

class BrewMethod(models.Model):
    name = models.CharField(max_length=100)

class Grinder(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    burrs = models.CharField(max_length=100, default="stock")

class Brewer(models.Model):
    make = models.CharField(max_length=200)
    model = models.CharField(max_length=200)

class Creamer(models.Model):
    name = models.CharField(max_length=100)

class Sweetener(models.Model):
    name =models.CharField(max_length=100)

class BrewedCoffee(models.Model):
    date_time_brewed = models.DateTimeField()
    method = models.ForeignKey(
        BrewMethod,
        related_name="method",
        on_delete=models.PROTECT,
    )
    bean = models.ForeignKey(
        CoffeeBean,
        related_name="bean",
        on_delete=models.PROTECT,
    )
    water = models.ForeignKey(
        WaterBlend,
        related_name="water",
        on_delete=models.PROTECT,
    )
    creamer = models.ForeignKey(
        Creamer,
        related_name="creamer",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    sweetener = models.ForeignKey(
        Sweetener,
        related_name="sweetner",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    grinder = models.ForeignKey(
        Grinder,
        related_name="grinder",
        on_delete=models.PROTECT,
    )
    brewer = models.ForeignKey(
        Brewer,
        related_name="brewer",
        on_delete=models.PROTECT,
    )
    coffee_dose_g = models.PositiveSmallIntegerField()
    liquid_yield_g = models.PositiveSmallIntegerField()
    total_brew_time_s = models.PositiveSmallIntegerField()
    grind_size = models.SmallIntegerField()
    water_temperature = models.SmallIntegerField(null=True,blank=True)
    preinfusion = models.BooleanField(default = False)
    preinfusion_time_s = models.SmallIntegerField(null=True,blank=True)
    pressure_bar = models.SmallIntegerField(null=True,blank=True)
    bloom = models.BooleanField(default=False)