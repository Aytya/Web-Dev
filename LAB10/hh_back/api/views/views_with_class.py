import json

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.http.response import JsonResponse


# Create your views here.
class Companies(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():  # only when data ?= data. in the create method we are providing only data
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})
class CompanyById(APIView):
    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, id):
        instance = self.get_object(id)
        serializer = CompanySerializer(instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return JsonResponse({'deleted': True})

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
        # data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def topTenVacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
