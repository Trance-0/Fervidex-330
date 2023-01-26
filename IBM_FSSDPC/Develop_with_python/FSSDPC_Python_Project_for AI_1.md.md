# Python Project for AI & Application Development Week 1

## Unit testing

Example code:

```python
# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        # test for none val
        if(p==None and q==None):
            return True
        if(p==None and q!=None):
            return False
        if(p!=None and q==None):
            return False
        if(p.val==q.val):
            if(self.isSameTree(p.left,q.left)and self.isSameTree(p.right,q.right)):
                return True
        return False
```

Unit test code

```python
import unittest

from solution import Solution,TreeNode

class TestSolution(unittest.TestCase):
    # only function start with test will run
    def test_case_1(self):
        x=Solution()
        p=TreeNode(1,
        None,
        None)
        q=TreeNode(1,
        None,
        None)
        self.assertEqual(x.isSameTree(p,q),True)

if __name__=='__main__':
    unittest.main()
```

## Packaging

### Module

Python file with functions, import by 

```python
from module import function_name
```

### Package

Collection of python file with \_\_init\_\_.py file in a dictionary

Contents of  \_\_init\_\_.py :

```python
from . import other_packages_1
from . import other_packages_2
```



### Libraries

A collection of packages or a single package

## Create Web Application using Flask

### Frameworks

Framework is a collection of packages or modules for a specific purpose

Most used Python frameworks - Flask, Django, Dash, Tornado, Web2Py etc.

Microframework - minimalistic web application frameworks

### Flask

* Flask is a microframework
* Flask is based on Werkzeug and Jinja2.
* Flask supports CRUD
  * Create -> POST/PUT
  * Read -> GET
  * Update -> UPDATE
  * Delete -> DELETE
* Flask can serve static files
* Flask web application is extensible

### Creating a Web Application

```python
from flask import Flask

app = Flask("My First Flask Application")


@app.route("/")
def hello():
    return "Hello World!"


if __name__=="__main__":
    app.run(debug=True) 
    # When no port is specified, starts at default port 5000
```



### Decorators in Flask

#### What are decorators

Decorators help in annotating the methods and tell what a particular method is meant for. These are different from comments. This is used by the interpreter while running the code.

#### Method decorators

Let’s say we have a python code where we want all the output to be in JSON format. It doesn’t make sense to include code for these in each of the methods as it makes the lines of code redundant. In such cases, we can handle this with a decorator.

```python
def jsonify_decorator(function):    
	def modifyOutput():        
		return {"output":function()}
    return modifyOutput
    
@jsonify_decorator
def hello():
	return 'hello world'
	
@jsonify_decorator
def add():
	num1 = input("Enter a number - ")
    num2 = input("Enter another number - ")
    return int(num1)+int(num2)
    
print(hello())
print(add())
```

The method decorator is also referred to as the wrapper, which wraps the output of the function, that it decorates. In the above code sample, `jsonify-decorator` is the decorator method. We have added this decorator to `hello()` and `add()`. The output of these method calls will now be wrapped and decorated with the jsonify_decorator.

The output of invoking the above python code will be:

As you can see the method call has been wrapped with the decorator. The code has a free will to choose the name of the decorator. Here the name chosen is `jsonify_decorator`.

#### Route Decorators

You may have observed when you visit any domain you have the root and then have other end-points you can access. See the examples below.

```
https://mydomain.com/
https://mydomain.com/about
https://mydomain.com/register
```

We will look at creating these endpoints when we will create a web application using the flask module in the labs that will follow.

But to define these endpoints in Python we use what we call **Route Decorators**.

**@app.route(“/“)** is a Python decorator that Flask provides to assign URLs in our app to functions easily. You can easily tell that the decorator is telling our @app that whenever a user visits our application’s domain, in our case, execute the `home()` function.

We can handle multiple routes with a single function by just stacking additional route decorators above the method which should be invoked when the route is called. The following is a valid example of serving the same “Hello World!” message for 3 separate routes:

```python
@app.route("/")
@app.route("/home")
@app.route("/index")
def home():    
	return "Hello World!"Copied!
```

The route decorators also take `method` as a second parameter, which can be set to the type of HTTP methods, the route will support. We will learn about this in the later sections.

The route decorator can also be more specific. For example, to get the details of a user whose userId is U0001, you may go to
`http://mydomain.com/userdetails/U0001`. It doesn’t make sense to define a different route for each user you may be dealing with. In such cases, we define the route like this.

```
123@app.route("/userdetails/<userid>")def getUserDetails(userid):    return "User Details for  "+useridCopied!
```

Congratulations! You have just learned about decorators in python. Go ahead and use it in your code.