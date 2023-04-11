from django.contrib import admin
from api.models import Company
from api.models import Vacancy

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name','city','address')