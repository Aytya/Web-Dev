from django.contrib import admin
from .models import Vacancy, Company


# Register your models here.
@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'company')


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')
