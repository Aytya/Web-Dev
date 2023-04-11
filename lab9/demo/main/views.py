from django.http.response import HttpResponse, JsonResponse

from datetime import datetime, timedelta
from api.models import Vacancy, Company


def home(request):
    """Home page view"""
    return HttpResponse("<h1 style='color: red;'>home page</h1>")


def about(request):
    """About page view"""
    return HttpResponse("<h1 style='color: red;'>about page</h1>")


def hours_ahead(request, hour):
    time_str = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(f"<h1 style='color: red;'>Date time: {time_str}</h1>")


companies = [
    {
        'id': _id,
        'name': f'Company {_id}',
        'price': _id * 1000,
        'vacancy': _id % 2 + 1
    }
    for _id in range(1, 10)
]


def company_list(request):
    return JsonResponse(companies, safe=False)


def company_detail(request, company_id):
    for company in companies:
        if company['id'] == company_id:
            return JsonResponse(company)
    return JsonResponse({'error': 'Company not found'})

vacancies = [
    {
        'id': _id,
        'name': f'Vacancy {_id}',
        'salary': _id * 1000,
        'company':f'Company {_id}'
    }
    for _id in range(1, 10)
]

def vacancy_list(request):
    return JsonResponse(vacancies, safe=False)

def vacancy_list_api(request):
    vacancy = Vacancy.objects.all()

    return HttpResponse(vacancy)


def vacancy_detail(request, vacancy_id):
    for vacancy in vacancies:
        if vacancy['id'] == vacancy_id:
            return JsonResponse(vacancy)
    return JsonResponse({'error': 'Vacancy not found'})

def company_vacancy(request, vacancy_id):
    list = []

    for i in companies:
        if i['vacancy'] == vacancy_id:
            list.append(i)

    return JsonResponse(list, safe = False)


def top_ten(request):
   vacancy = Vacancy.objects.all().order_by('-salary')

   return HttpResponse(vacancy)