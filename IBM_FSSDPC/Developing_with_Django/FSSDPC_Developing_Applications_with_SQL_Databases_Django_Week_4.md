# FSSDPC Developing Applications with SQL Databases Django Week 4

## Class-based and Generic Class views

### Function-based and class-based view

* Function-based view was the original view implementation in Django for specific functionalities.
* Class-based view was added to improve extensibility and reusability
* Both Function-based and Class-based views are essentially Python functions

### Class-based view

A simple class-based view

```python
from django.views import View

class CourseView(View):
    
    def get(self,request):
        course = Course.objects.get(pk=1)
        template = "<html>" \
        			"<body> The first course we created is `%s.` </body>" \
        			"</html>" % course.name
        return HttpResponse(content=template)
    
    def post(self, request):
        pass
```

Don't forget to map the views.course_function_view function to URL pattern / course

```python
...
urlpatterns = [
    path(route='course', view=views.CourseView.as_view(), name='course')
]
...
```

### Generic class-based view

* Built-in view classes provided by Django
* Help to solve common tasks for developers

A course detail view

```python
from django.views import generic
from .models import Course

class CourseView(generic.DetailView): # extends DetailView
    model = Course
    template_name = 'onlinecourse/course_detail.html'
```

Common generic class-based views

* ListView: represents a list of objects
* DetailView: represents the details of an object
* FormView: represents a form for submitting data
* Group of Date views: handles date-based data

Function-based views: Pros and cons

* Pros:
  *  Simple and easy to understand
  * Explicit code
  * Mainly built for a specific functionality

* Cons:
  * Difficult to extend or reuse
  * Handles requests using conditional statements; may increase code complexity

Class-based views: Pros and cons

* Pros: 
  * Reusable: Code for some common tasks can be reused following the OOP paradigm
  * Exntendible: add logic with minimal code changes
  * Handle requests using class methods
  * Leverage built-in generic class-based views
* Cons: 
  * Code is harder to read
  * Implicit code is hidden from developers

Django Authentication System