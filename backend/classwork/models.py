from django.db import models

from common.models import BaseModelWithUID

# Create your models here.
class Plan(BaseModelWithUID):
    items = models.CharField(max_length=1000)