from django.db import models

'''
Table relations:
1) OneToOne - each "User" can crate only one "Profile"
2) OneToMany (ForeignKey) - "Category" might contain many "Products"
3) ManyToMany - "Post" might have many "Tags", one "Tag" can be in many "Posts"
'''


# select * from api_product where category_id = <id>;
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=255)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def __str__(self):
            return f'{self.id}: {self.name}'

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField(default=1000)
    company = models.ForeignKey(Company,
                                     on_delete=models.CASCADE,
                                     related_name='vacancies')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
            return {
                'id': self.id,
                'name': self.name,
                'salary': self.price
            }