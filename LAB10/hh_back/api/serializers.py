from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializerS(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

class VacancySerializerS(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    salary = serializers.IntegerField()


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'description')

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('name', 'salary')

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()
        return instance
