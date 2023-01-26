# Developing Applications with SQL, Databases, and Django Week 1

## Structure Query Language

Database: Repository, tables

Data Management System: software to manage database

Relational Data Management System: a set of software to manage database

### Basic SQL Commands

* Create a table
* Insert
* Select
* Update
* Delete

## Relational Database

A relational database is a collection of data organized into a table structure, where the tables can be linked, or related, based on data common to each.

Rows are the record and columns are the attributes.

Similarities between relational databased and spreadsheets: Relational databased build on the organizational principles of flat files such as spreadsheets, with data organized into rows and columns following a well-defined structure and schema.

Relational databased:

* Ideal for the optimized storage, retrieval, and processing of data for large volumes of data
* Each table has a unique set of rows and columns
* Relationships can be defined between tables
* Field can be restricted to specific data types and values
* Can retrieve millions of records in seconds using SQL for querying data
* Security architecture of relational databased provides greater access control and governance

Relational Databases can be:

* Open-source and internally supported
* Open-source and commercial supported
* Commercial closed-source

IBM DB2, MySQL, Oracle database, PostgreSQL

Cloud-based relational databased or database-as-a-service:

Amazon RDS, Google SQL, IBM DB2 on Cloud, Oracle Cloud, Azure SQL

Advantages of Relational Databases:

* Create meaningful information by joining tables
* Flexibility to make changes while the database is in use
* Minimize data redundancy by allowing relationships to be defined between tables
* Offer export and import options that provide ease of backup and disaster recovery
* Are ACID compliant ensuring accuracy and reliability in database transactions

Limitations of RDBMS:

* Does not work well with semi-structed and unstructured data
* Migration between two RDBMS's is possible only when the source and destination tables have identical schemas and data types
* Entering a value greater than the defined length of a data field results in loss of information

## Relational Database Concepts

Relational model

* Most used data model
* Allows for data independence
* Data is stored in tables

Entity-Relationship Model

* Used as a tool to design relational databases

Mapping Entity Diagrams to Tables

* Entities become tables
* Attributes get translated into columns

Primary key and foreign key

Primary key is used to uniquely identified a specific row in a table

Common datatypes include characters, numbers, and dates/times

### Summary

Congratulations! You have completed this module. At this point in the course, you know: 

- Structured Query Language, or SQL, was designed for managing data in relational databases and is useful in handling structured data. 
- Data is a collection of facts in the form of words, numbers, and pictures. 
- A database is a repository of data that provides functionality for adding, modifying, and querying data. 
- Relational databases store tabular data as collections of related items, with columns containing item properties. 
- The basic SQL statements are CREATE TABLE, INSERT, SELECT, UPDATE, and DELETE. 
- Relational databases are ideal for the optimized storage, retrieval, and processing of large volumes of data. 
- RDBMS is a mature and well-documented technology, providing flexibility, reduced redundancy, ease of backup and disaster recovery, and ACID compliance. 
- An Entity-Relationship model is a tool for designing relational databases. Entities become tables, and attributes are translated into columns. 

## Basic SQL Statements

### SELECT

#### Retrieving rows form a table

* After creating a table and inserting data into the table, we want to see the data
* SELECT statement
  * A Data Manipulation Language (DML) statement used to read and modify data

```sql
SELECT * FROM <tablename>
```

#### Retrieving subset of the columns

```sql
SELECT <column 1>, <column 2> FROM <tablename>
```

#### Restricting the Result Set: WHERE Clause

```sql
SELECT * FROM <tablename> WHERE <condition>
```

* Equal to =
* Greater than >
* Less than <
* Greater than or equal to >=
* Less than or equal to <=
* Not equal to <>

#### Get number of rows matching the query criteria.

```sql
SELECT COUNT(*) FROM <tablename>
```

#### Retrieve unique values in a column

```sql
SELECT DINSTINCT <columnname> FROM <tablename>
```

#### Retrieve just first 10 rows in a table

```sql
SELECT * FROM <tablename> LIMIT 10
```

### INSERT

Adding rows to a table

* Create the table (CREATE TABLE statement)
* Populate table with data:
  * INSERT statement
    * A Data Manipulation Language (DML) statement used to read and modify data

```sql
INSERT INTO <tablename> (<columne 1>, <columne 2>) VALUES (<value 1>, <value2>)
```

#### Inserting multiple rows

```sql
INSERT INTO <tablename> (<columne 1>, <columne 2>) VALUES (<value 1>, <value2>) (<value 1>, <value2>)
```

### UPDATE

```sql
UPDATE <tablename> SET <columne 1>=<value 1> <columne 2>=<value 2> WHERE <conditions>
```

### DELETE

```sql
DELETE FROM <tablename> WHERE <condition>
```

### CREATE table

```sql
CREATE TABLE <tablename>
	(
	<column 1> <datatype>(length) <optionalparameters>(eg. PRIMARY KEY NOT NULL),
	<column 2> <datatype>(length) <optionalparameters>,	
	...
	)
```

### ALTER, DROP, and TRUNCATE tables

* Add or remove columns
* Modify the data type of columns 
* Add or remove keys
* Add or remove constrains

```sql
ALTER TABLE <tablename>
	ADD COLUMN <column 1> SET DATA TYPE <datatype>(size)
	...
	ADD COLUMN <column n> datatype;
```

#### Remove columns

```sql
ALTER TABLE <tablename>
	DROP COLUMN <columnname>;
```

#### Remove tables

```sql
DROP TABLE <tablename>;
```

#### Remove all the values in table

```sql
TRUNCATE TABLE <tablename>
	IMMEDIATE;
```

### Sorting result sets

ORDER BY clause

```sql
SELECT <columnname> FROM <tablename> ORDER BY <columnname/columnnumber> (add DESC if you want to sort it in descending order)
```

### JOIN two tables

JOIN operator:

* combines rows from two or more tables
* Based on a relationship

Types of joins

* Inner Join
* Outer Join
  * Left Outer Join
  * Right Outer Join
  * Full Outer Join

### Summary

Congratulations! You have completed this lesson. At this point in the course, you know: 

- Structured Query Language, or SQL, is used for querying and managing data. 
- SQL is useful for handling structured data, or data incorporating relations among entities and variables.
- The SQL SELECT statement is used to retrieve data from a relational database table. 
- The SELECT statement is called a query, and the output we get from executing this query is called a Result Set or a Result Table.
- In its simplest form, the syntax for a SELECT statement is: 

​          SELECT * from TableName

- The SQL INSERT statement is used to insert data into a relational database table by adding rows to the table.
- The syntax of the INSERT statement is:

​          INSERT INTO TableName ColumnName VALUES (values)

- For the INSERT statement, It is important that the number of values provided in the Values clause is equal to the number of column names specified in the Column Name list. This ensures that each column has a value. 
- The SQL UPDATE statement is used to read and modify data.
- The syntax of the UPDATE statement is: 

​          UPDATE [TableName]          SET [[ColumnName]=[Value]]          <WHERE [Condition]>

- The SQL DELETE statement is used to remove data from a table.
- The syntax of the DELETE statement is:

​          DELETE FROM [TableName] <Where [Condition]>

- The WHERE clause specifies the rows in a table that are to be acted on by a SQL statement such as SELECT, DELETE, or UPDATE.

## Using SQL in applications

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

