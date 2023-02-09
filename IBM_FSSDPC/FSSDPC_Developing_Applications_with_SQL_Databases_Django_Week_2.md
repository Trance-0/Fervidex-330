# FSSDPC Developing Applications with SQL Databases Django Week 2
> Using SQL in applications

Object-oriented paradigm

executing SQL in Python

```python
# Connection to a database
connection = sqlite3.connect("course.db")
cursor =  connection.cursor()
# Insert a learner record
insert_statement = "INSERT INTO data_learner (first_name, last_name, dob, occupation) VALUES ("John", "Doe", "1962-01-01", "Developer"); "
cursor.execute(insert_statement)
# Execute SELECT statement via cursor
cursor.execute("SELECT * FROM data_learner")
# Get first row in table course
learner =  cursor.fetchone()
```

expected out put would be 

```
('John', 'Doe', '1962-01-01', 'Developer')
```

### Create and get an object in OOP

```python
# Connection to a database
connection = sqlite3.connect("course.db")
cursor =  connection.cursor()
# Insert a learner record
insert_statement = "INSERT INTO data_learner (first_name, last_name, dob, occupation) VALUES ("John", "Doe", "1962-01-01", "Developer"); "
cursor.execute(insert_statement)
# Execute SELECT statement via cursor
cursor.execute("SELECT * FROM data_learner")
# Create a Learner object in memory
learner = Learner()
learner.first_name =  learner_row['first_name']
learner.last_name =  learner_row['last_name']
learner.dob =  learner_row['dob']
learner.occupation =  learner_row['occupation']
# Print the Learner object
learner.print_profile()
```

expected out put would be 

```
('John', 'Doe', '1962-01-01', 'Developer')
```

### Differences between OOP and SQL

#### OOP

* Models entities using *classes, objects,* and *attributes*
* Models relationships using *inheritance, association, aggregation,* and so on
* Performs CRUD (Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most. )on data using *methods*

#### SQL

* Models entities using *tables, rows,* and *columns*
* Models relationships using *JOIN* and *FOREIGN KEY*
* Performs CRUD on data using *Data Manipulation Language (DML)*

*ORM (Object-Relational Mapping) is used to bridge the Objects and Rows in RDBMS*

To save your time, ORM code can do this:

```python
# Query all learners in couse with name 'Introduction to Python'
Course.objects.get(name='Introduction to Python').learners.all()
```

### Popular ORM libraries

Python

* Django
* SQLAlchemy

Java

* Hibernate
* OpenJPA

JavaScript

* Sequelize
* TypeORM

### Pros and cons of ORM

Pros

* Your class designs define the databases
* Use databased without writing SQL
* Single set of APIs for different database systems
* Deliver applications faster

Cons

* Impedance mismatching (the data may not map to SQL properly)
* Moves data access complexity to applicaiton code
* Hides implementation details; difficult to debug
* May reduce performance

## Django Model

Key facts:

* Each Django model (class) maps to a database table
* Each class object represents a database table row
* Each field represents a database table column
* Schema and tables are automatically generated once model classes are defined

```python
class User(models.Model):
    first_name = models.CharField(max_length=30)
```

### Fields

* Each field in a model should be a Field class
* Django maps each field to a column type, such as *INT, VARCHAR,* or *DATE*
* Each field has customization parameters such as *null, blank, default,* or *primary_key*

```python
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dob = models.DateField()
```

in SQL

```sql
CREATE TABLE data_user
("id" serial NOT NULL PRIMARY KEY, 
 "first_name" varchar(30) NOT NULL,
 "last_name" varchar(30) NOT NULL,
 "dob" data NOT NULL
);
```

### Relationship

#### One-to-One

```python
class Instructor(models.Model):
	is_full_time = models.BooleanField()
	total_leaners = models.IntegerField()
	// this is a foreign key pointing to user class
	user = models.OneToOneField(User)
```

```python
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dob = models.DateField()
```

#### Many-to-One

```python
class Project(models.Model):
	name = models.CharField(max_length=30)
	grade = models.CharField(max_length=30)
	// this is a foreign key pointing to project class in many to one relationship
	course = models.ForeignKey(Course)
```

```python
class Course(models.Model):
	name = models.CharField(max_length=30)
	description = models.CharField(max_length=30)
```

#### Many-to-Many

```python
class Course(models.Model):
	name = models.CharField(max_length=30)
	description = models.CharField(max_length=30)
	// this is a foreign key pointing to project class in many to many relationship
	leaners = models.ManyToManyField(Instructor)
```

```python
class Leaner(models.Model):
	name = models.CharField(max_length=30)
	grade = models.CharField(max_length=30)
	social_link = models.URLField()
```

#### Intermediate table

Used to map relationship for two many-to-many table

```python
class Course(models.Model):
	name = models.CharField(max_length=30)
	description = models.CharField(max_length=30)
	// this is a foreign key pointing to project class in many to many relationship
	leaners = models.ManyToManyField(Instructor, through='Enrollment')
```

```python
class Enrollment(models.Model):
	course = models.ForeignKey(Course)
	leaner = models.ForeignKey(Leaner)
	date_enrolled =  models.DateField()
```

```python
class Leaner(models.Model):
	name = models.CharField(max_length=30)
	grade = models.CharField(max_length=30)
	social_link = models.URLField()
```

#### Inheritance

Determine if parent models should have their own tables

* Multi-table
  * Subclassing an existing model
  * Each model will have a separate database table

```python
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dob = models.DateField()
```

```python
class Instructor(User):
	is_full_time = models.BooleanField()
	total_leaners = models.IntegerField()
```

* Abstract base classes
  * Parent class to hold common information
  * No base table created
* Proxy models
  * Modify the application-level behavior of a model without changing fields

## Django CRUD

Create, Read, Update, Delete

### Create

Create and save a model instance

A Course instance

```python
course_cloud_app = Course(name="...", description="...")
course_cloud_app.save()
```

### Read

```sql
SELECT * FROM Course
```

```django
course = Course.objects.all()
```

#### Filter method

```django
# return a filtered query set
part_time_instrctors = Instructor.objects.filter(is_full_time=False)
```

#### Exclude method

```django
filtered_instrctors = 
Instructor.objects.exclude(full_time=False).
fiter(total_learners__gt=30000).
filter(first_name__startswith="J")
```

#### Get method

```dj
# only works for single object
instrctor_john = Instrctor.objects.get(first_name='John')
print(instrctor_john)
```

#### Find objects in related fields

```django
courses = Course.objects.filter(instrctors__first_name='John')
```

### Update

```django
learner_john.dob = date(1985, 3, 16)
learner_john.save()
```

#### Update foreign key and many to many field

```django
project_orm.course = course_python
project_orm.save()
```

Many to many field

```django
course_python.learners.add(leaner_joe)
course_python.save()
```

### Delete

```django
project_orm.delete()
# or you can use
Course.objects.filter(name__contains='Python').delete()
```

## Related Objects

The backward relationship is automatically created by django

### One to one relationship access

Forward access

```django
leaner = Learner.objects.get(first_name='John')
leaner.user
```

Backward access

```django
user = User.objects.get(first_name='John')
user.learner
```

### One to many relationship access

Forward access

```django
project = Projects.objects.get(name_contains='Cloud')
project.course
```

Backward access

```django
# Rember double underscores
course = Course.objects.get(name__contains='Cloud')
course.projects_set.all()
```

### Many to many relationship

Forward access

```django
user =  Course.objects.get(name__contains='Cloud')
course.instructors.all()
```

Backward access

```django
instrctor = Instructor.objects.get(first_name='John')
instrctor.course_set.all()
```

### Delete related objects

put on delete options when creating the class

``` python
class Project(models.Model):
    ...
    course = models.ForeignKeyField(Instructor,on_delete=models.CASCADE, null=True)
```

CASCADE: also delete all referencing projects

PROTECT: prevent the course from deletion if it has projects

SET_NULL: leave the referencing projects for future use

SET(): Assign referencing projects to a specific course passed in SET()

DO_NOTHING: Do nothing

### Additional methods to handle related objects

```python
# add(obj)
course.instructors.add(new_instructor)
# create(**kwargs)
Enrollment.objects.create(leaner=leaner_john, course=cloud_cloud)
# remove(obj1, obj2, ...)
course.instructors.remove(instructor1, instructor2)
# clear()
course.instructors.clear()
# set(objs)
course.instructors.set(new_instructors)
```

