from rest_framework import generics

from classwork.models import Plan
from classwork.rest.serializers.plan import PlanSerializer


class PlanListView(generics.ListCreateAPIView):
    serializer_class = PlanSerializer
    queryset = Plan.objects.filter()
    permission_classes = []


class PlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlanSerializer
    queryset = Plan.objects.filter()
    permission_classes = []
    lookup_field = "uid"
    lookup_url_kwarg = "plan_uid"
