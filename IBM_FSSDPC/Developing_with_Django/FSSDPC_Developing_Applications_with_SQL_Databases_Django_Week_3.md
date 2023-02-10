# FSSDPC Developing Applications with SQL Databases Django Week 3
## Full-stack Django Development

Model-View-Controller (MVC)

Django Model-View-Template (MVT)

* In the Django framework implementation, there is not explicit Controller
* The Django server itself performs the controller function

Django model

* Django models are classed mapped to database tables
* Django Model APIs allow developers to perform CRUD on objects
* Developers can also write business logic in Django model classes as functions

Django View

Web request -> Python function -> Web response

Django template

* Django used a template to generate dynamic Web pages which are rendered in a user's browser.

## Create a Django App

Django app Development process

### Initialization

* Create project and app

### Core Development

* Testing
* Build UI
* Map URLs
* Create views
* Create models

### Add-ons

* Admin Site
* Security
* Third Party Frontend
* Configuration
* Localization
* Logging

### Deployment and Monitoring

* Performance+ Packaging and Deployment

#### Run start project command

``` shell
django-admin startproject mysite
```

Project structure

​	mysite/

​		manage.py - cmd interface

​		mysite/

​			\_\_init\_\_.py

​			settings.py -  configuration

​			urls.py - URL and routing

#### Run start app command

```shell
python manage.py startapp newapp
```

Project structure

​	mysite/

​		manage.py - cmd interface

​		...

​		newapp/

​			\_\_init\_\_.py

​			admin.py - admin site

​			models.py - model classes

​			view.py - view functions/classes

​			urls.py - URL declarations and routing

​			apps.py

​			migrations/

#### Then include Django app in project

Open mysite/setting.py, find the INSTALLED_APPS setting, and add your app as follows

```python
INSTALLED_APPS = [
    'newapp.apps.newappConfig',
    ...
]
```

Optional setup database

Open mysite.settings.py, find the DATABASES setting, and add:

```python
DATABASES = {
    'default':{
        'ENGINE': 'database engine',
        'NAME': ...,
        ...
    }
}
```

#### Create and activate models

1. Cerate models in models.py

   ``` python
   class Fragments(models.Model):
       name =  models.CharField(max_length=30)
       description = models.CharField(max_length=500)
       ...
   ```

2. Create migration scripts

   ```shell
   python manage.py makemigrations myApp
   ```

3. Optionally, check the generated SQL

   ```shell
   python manage.py sqlmigrate myApp 001
   
   -- CREATE TABLE.....
   ```

#### Create a simple view and template

Open myApp/views.py and add the following code snippet

```python
from django.http import HttpResponse
from .models import Fragments

def grab_fragments(request):
    fragements = Fragements.objects.get(pk=1)
    template = "<html>"\
    		"<body> The first fragments we created is `%s.`" \
    		"</body>"\
    		"</html>" % fragments.name
    return HttpResponse(content=template)
```

#### Configure view URL

1. Create a urls.py under myApp/ and add urlpatterns list

   ```python
   from django.urls import path
   from . import views
   
   urlpatterns = [
       path(route='', view=views.grab_fragments, name='grab_fragments')
   ]
   ...
   ```

2. Include fragments list urls.py in mysite/urls.py

   ```python
   from django.contrib import admin
   from django.urls import include, path
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       path('fragments/', include('myApp.urls')),
   ]
   ...
   ```

#### Run the app

1. Run server

   ```shell
   python manage.py runserver
   ```

2. Go to http://127.0.0.1:8000/myApp/ and check the first Web page rendered.

## Django Admin Site

### Django Admin

Django creates an admin site for managing models

Create an admin user

```shell
python manage.py createsuperuser
```

Go to: http://127.0.0.1:8000/admin and login

### Register models with admin site

1. Open myApp/admin.py,

2. and register Course and Instructor model

   ```python
   from django.contrib import admin
   from .models import Fragments, Users
   
   admin.site.register(Fragments)
   admin.site.register(Users)
   ```

### Customize the admin form

Create and register a course model admin class

```python
class AppAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'name', 'description']
    
admin.site.register(Fragments, AppAdmin)
```

### Add related objects

> Sorry, I am just too tired to come up with appropriate examples. so I will use default example instead.

Create and StackedInline object

``` python
class LessonInLine(admin.StackedInline):
    model = Lesson
    extra = 5
    
class CourseAdmin(admin.ModelAdmin):
    inlines = [LessonInline]
```

### Customize the change list

* Determine the field to appear in the table

  ``` python
  class CourseAdmin(admin.ModelAdmin):
      list_display = ['name','pub_date']
      ...
  ```

### Add search and filters

* Add a search_fields and list_filter fields

  ```python
  class CourseAdmin(admin.ModelAdmin):
      search_fields = ['name']
      list_filter = ['pub_date']
  ```

## Django Views

Web request (GPDU) - > Python function -> Web Response (a string, JSON/XML HTML page, error)

Function-based view

a function-based view to return a simple html page with course name

```python
def course_function_view(request):
    if request.method == 'GET':
        # function logic
        course = Course.objects.get(pk=1)
        template = "<html>"\
    		"<body> The first fragments we created is `%s.`" \
    		"</body>"\
    		"</html>" % fragments.name
    	return HttpResponse(content=template)
    else:
        return HttpResponse(content="Request processed")
```

Don't forget to Map a URL to the course view

Map views.course_function_view function to URL pattern /course

```python
app_name = 'onlinecourse'
urlpatterns = [
    path(route='course', view=views.course_function_view, name='course')
]
...
```

### Returning HTTP errors

Return a HTTP response with error status code

```python
def course_function_view(request):
    ...
    if course is None:
        # function logic
        return HttpResponse(status=404, content="Course not found")
    else: 
        return HttpResponse(status=200, content="Course was found")
```

## Django Template

HTML elements + tags and variables

Django template file structure

/project/

...

​	online course/

​		templates/

​			onlinecourse/

​				course_list.html

​				template1.html

### Rendering with a context

* Replaces variables with values
* Executes tags

### A Django template example

Create a folder in onlinecourse/templates/onlinecourse, and then add a course_list.html file

```html
<body>
{% if course_list %}
    <ul>
        {% for course in course_list %}
        	<h1>{{ course.name }}</h1>
        	<p>{{ course.description }}</p>
        {% end for %}
    </ul>
{% else %}
    <p>
        No courses are avaliable.
    </p>
{% endif %}
</body>
```

An index view to return all courses

```python
def index(request):
    courses = Course.objects.all()
    context = {
        'course_list': courses
    }
    return render(request, 'onlinecourse/course_list.html', context)
```

### Link a created CSS stylesheet

Continuing on the template

```html
<head>
    {% load static %}
    <link rel="stylesheet" type="text/css" href="{% static 'onlinecourse/course_list.css' %}">
</head>

<body class="course-body">
{% if course_list %}
    <ul>
        {% for course in course_list %}
        	<h1>{{ course.name }}</h1>
        	<p class="course-paragraph">{{ course.description }}</p>
        	<hr class="course-separator">
        {% end for %}
    </ul>
{% else %}
    <p>
        No courses are avaliable.
    </p>
{% endif %}
</body>
```

