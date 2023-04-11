from django.urls import path, re_path
from main import views

urlpatterns = [
    path('home/', views.home),
    path('about/', views.about),
    re_path(r'^time/plus/(\d{1,2})/$', views.hours_ahead),

    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('campanies/<int:company_id>/vacancies', views.company_vacancy),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten)

]