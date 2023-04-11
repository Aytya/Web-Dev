from django.urls import path, re_path
from api import views

urlpatterns = [
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),

    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
]