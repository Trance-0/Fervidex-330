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






