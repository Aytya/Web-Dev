import json

from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Vacancy, Company
from api.serializers import CompanySerializerS, VacancySerializerS, CompanySerializer, VacancySerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response


# Create your views here.
@api_view(['GET', 'POST'])
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializerS(companies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():  # only when data ?= data. in the create method we are providing only data
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # name = data.get('name', '')
        # description = data.get('description', '')
        # city = data.get('city', '')
        # address = data.get('address', '')
        # company = Company.objects.create(name=name, description=description, city=city, address=address)
        # return JsonResponse(company.to_json(), safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
def companiesById(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)  # instance - is what we are going to update
        if serializer.is_valid():
            serializer.save()  # calls update in serializer
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # name = data.get('name', '')
        # description = data.get('description', '')
        # city = data.get('city', '')
        # address = data.get('address', '')
        # company.name = name
        # company.description = description
        # company.city = city
        # company.address = address
        # company.save()
        # return JsonResponse(company.to_json(), safe=False)
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})

@api_view(['GET'])
def companyIdVacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancyList(request):
    try:
        vacancies = Vacancy.objects.all()
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(['GET', 'DELETE', 'PUT'])
def vacancyDetail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    if request.method == "DELETE":
        vacancy.delete()
        return Response({"deleted": True})
    if request.method == 'PUT':
        #data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # name = data.get('name', '')
        # description = data.get('description', '')
        # salary = data.get('salary', '')

        # vacancy.name = name
        # vacancy.description = description
        # vacancy.salary = salary

        # vacancy.save()
        # return JsonResponse(vacancy.to_json(), safe=False)

@api_view(['GET'])
def topTenVacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
