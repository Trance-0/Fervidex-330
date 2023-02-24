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
  * Extendible: add logic with minimal code changes
  * Handle requests using class methods
  * Leverage built-in generic class-based views
* Cons: 
  * Code is harder to read
  * Implicit code is hidden from developers

## Django Authentication System

Authentication:

Identify who you are.

Authorization:

Verify what you can access.

### Django User objects

* User model provides basic information about users

### User login form in template

``` html
...
<form action="{% url 'onlinecourse:login' %}" method="post">
    <div class="...">
        {% crsf_token %}
        <h1>Sign up</h1>
        <lable for="username"><b>User Name</b></lable>
        <input type="text" placeholder="Enter User Name: " name="username" required>
        <lable for="pwd"><b>Password</b></lable>
        <input type="password" placeholder="Enter Password: " name="pwd" required>
        <button class="..." type="submit">Login</button>
    </div>
</form>
...
```

### User login view

```python
def login_request(request):
    if requrest.method == 'POST':
        # Get udername and password from login form
        username = request.POST['username']
        password = request.POST['psw']
        # Authenticate user
        user = authenticate(username=username, password=password)
        # Login user
        login(request, user)
        return redirect("onlinecourse:index")
```

Check for authentication in session

* Django session framework stored stateful data for the authenticated user visiting the site.
* **sessionid** is also stored in browser cookie.

```python
sessionid = request.COOKIES.get('sessionid')
session = request.session.items()
print(sessionid)
print(session)
# if the user is authenticated
sessionid: somevalue
session; dict_items([keys, values]...)
# if the user is not authenticated
sessionid: None
session: dict_items([])
```

User logout view

```python
def logout_request(request):
    logout(request)
    return redirect("onlinecourse:index")
```

### User registration form in template

```html
...
<form action="{% url 'onlinecourse:registration' %}" method="post">
    <div class="...">
        {% csrf_token %}
        <h1>Sign up</h1>
        <lable for="username"><b>User Name</b></lable>
        <input type="text" placeholder="Enter User Name: " name="username" required>
        <lable for="pwd"><b>Password</b></lable>
        <input type="password" placeholder="Enter Password: " name="pwd" required>
        <button class="..." type="submit">Login</button>
    </div>
</form>
...
```

### User registration view

```python
def registration_request(request):
    if requrest.method == 'POST':
        # Get udername and password from login form
        username = request.POST['username']
        password = request.POST['psw']
        # Create and insert a user object
        user = User.objects.create_user(username=username, password=password)
        # Login user
        login(request, user)
        return redirect("onlinecourse:index")
```

### Authorization

Permission, User, and Group

#### Permission

Assign permissions on objects for user

* View permission
* Add permission
* Change permission
* Delete permission

#### Groups

Can be access in admin site

## Bootstrap integration

A free web front-end framework facilitating web app development

Provides common HTML/CSS templates to simplify Django templates development

### Add Bootstrap to a Django template

```html
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
```

### Layout design

#### Navigation bar

```html
<nav class="navbar bg-light">
    <ul class="navbar-nav">
    	<li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
    </ul>
</nav>
```

#### Add sign in form to navigation bar

```html
<ul>
    <li>
    	<form class="form-inline">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Username" name="username">
                <input type="password" class="form-control" placeholder="Username" name="psw">
                <button class="btn btn-primary" type="submit">
                    Login
                </button>
                <a class="btn btn-link" href="#">
                	Sign Up
                </a>        
            </div>
        </form>
    </li>
</ul>
```

#### Container

* There are two types of containers in Bootstrap

```html
<div class="container">
    ...
</div>
```

```html
<div class="container-fluid">
    ...
</div>
```

#### Card deck and card

```html
...
<div class="card-deck">
    ...
    <div class="card">
        <img class="card-img"...>
        <div class="card-body bg-light">
            <h5 class="card-title">{{	course.name	}}, <span class="text-success">
                {{	course.total_enrollment	}} enrolled</span>
            </h5>
            <p class="card-text">
                {{	course.description	}}
            </p>
            ...
        </div>
    </div>
</div>
...
```

#### Table

```html
<table class="table">
    <thread>
    	<tr>
        	<th>Fristname</th>
            <th>Lastname</th>
            <th>Email</th>
        </tr>
    </thread>
    <tbody>
    {% for user in course.user.all %}
        <tr>
            <td>{{	user.first_name	}}</td>
            <td>{{	user.last_name	}}</td>
            <td>{{	user.email	}}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>
```

## Manage Static Files

Add static files to an app

Example:

An onlinecourse app

static file structure

onlinecourse/

​	static/

​		onlinecourse/

​			images/

​				background.png

​			course.css

* Create static file folders under your app

  (Stored in STATICFILES_DIRS = [dir1, dir2, dir3,...])

* Create a subfolder using the same app name for name spacing

* Django uses the name space to uniquely refer to static files across multiple apps

  To collect all the static files in app, you need to call

  ```shell
  collectstatic
  ```

An example structure under STATIC_ROOT

/static/

​	admin/

​		css/

​		fonts/

​		img/

​		...

​	onlinecourse/

​		images/

​			course.css

​	payment/

​		images/

​		css/

​		...

## Deploy Django App on Cloud

### Django Development

* In Django development, a 'runserver' command line starts a minimal development web server
* To deploy reliable, scalable, and maintainable Django apps, we need to deploy them on web servers
* Most web severs such as Apache HTTP server and Nginx are not written in Python...

Web Server Gateway Interface (WSGI) application callable in wsgi.py 

* Gunicorn
* uWSGI
* Apache and mod_wsgi

Asynchronous Server Gateway (ASGI) application callable in asgi.py

* Daphne
* Hypercorn
* Uvicorn
