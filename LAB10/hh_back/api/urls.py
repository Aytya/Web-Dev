from django.urls import path, include
from api import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.companiesById),
    path('companies/<int:id>/vacancies/', views.companyIdVacancies),
    path('vacancies/', views.vacancyList),
    path('vacancies/<int:id>/', views.vacancyDetail),
    path('vacancies/top_ten/', views.topTenVacancies)
]