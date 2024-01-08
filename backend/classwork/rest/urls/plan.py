from django.urls import path

from ..views.plan import PlanListView, PlanDetailView

urlpatterns = [
    path("/<uuid:plan_uid>", PlanDetailView.as_view(), name="classwork.plan.details"),
    path("", PlanListView.as_view(), name="classwork.plan.list"),
]
