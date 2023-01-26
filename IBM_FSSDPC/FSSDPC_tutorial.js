// This is the place you put java code, but the line usually replaced by link to js document for better reading experience.
// Here is a sample script for DOM accessor functions
function textChecker() {
    var textField1 = document.getElementById('textField1');
    // the document.getElementById get the element with attribute id=given value, to reduce complexity, use var for unknow datatype.
    if (textField1.value == '') {
        alert('Please type in the field.');
        // this raise alert for user.
    } else {
        alert('You entered: ' + textField1.value);
    }
}
function testElementSuport() {
    // this function use input type date as an example, remember to set the testing method in tag with id='thisform', or the funciton may failed to get element.
    var datepicker = document.createElement('input');
    var formelement = document.getElementById('thisform');
    datepicker.setAttribute('type', 'date');
    formelement.appendChild(datepicker);
    if (datepicker.type == 'text') {
        alert('Date input is not supported');
    } else {
        alert('Date input is supported');
    }
}
// java script have nothing to do with java, and it only got few primitive data types like:
// there is primative type and wrapper object in java script, which is really annoying
typeof "abc";
typeof new String("abc");
typeof (new String("abc")).valueOf();
// when you call new, you get wrapper, which can be convert to primative by .value;
arr=new Array(0,1,2);
arr.length;
arr=[0,1,2];
// date objects
var today=new Date();
// this returns the local data and time
// the var is a loose data type that you don't need to declair it's type at first.
var test;
// the value is undefined now, not int or any other primitive data type
test=10;
// there are also switch statement in js.
// the object is smashed with function
function CustomObjet(attribute){
    this.attribute=attribute;
    this.getAttribute=function(){
        return this.attribute;
    }
}
// or you can make prototype function like this
CustomObjet.prototype.getAttribute=function(){
    return this.attribute;
}
// there are may primitive functions like window. document. and element. 
// you may need noscript tag to notify where to get the data when script is not enabled for users.