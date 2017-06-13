### Introduction
What can we use JavaScript for?
* make website respond to user interaction
* build apps and games (e.g. blackjack)
* access information on the Internet (e.g. find out the top trending words on Twitter by topic)
* organize and present data (e.g. automate spreadsheet work; data visualization)

```javascript
//Pop up a window box
confirm("This is a window box");

//ask for a input
prompt("What is your name?")

//print out
console.log(2 * 5)
console.log("Hello")
```
JavaScript read 0 as false and 1 as true

### String Manipulation
* === Equal to
* !== Not equal to

```javascript
//String Length
"daniel".length
//Substring (note: JavaScript string is ZERO based)
"wonderful day".substring(3, 7)
//Return a Boolean data tyle
"I'm coding lieka champ".length > 10
```

### IF STATEMENT
```javascript
if ("life is not beautiful".length > 100 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("always remember life is beautiful!")
}
```
### Variable and Function
**Scope** - Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.  
Variables defined inside a function are local variables. They cannot be accessed outside of that function.
```javascript
var myAge = 28;
var age = prompt("What's your age");

//delare Function with result printed out
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
divideByThree(35)

//delare Function with result returned
var timesTwo = function(number) {
    return number * 2;
};

var newNumber = timesTwo(20)
console.log(newNumber);
```

### Array and For loop
Things about the array:
* store lists of data
* can store different data types at the same time
* are ordered so the position of each piece of data is fixed
```javascript
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Beijing", "Xuchang"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```

### While
```javascript
//below two blocks are same
var bool = true;
while(bool) {
    //do something
}

var bool = true;
while(bool === true){
    //do something
}
//you want to run at least one time no matter What
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
```

### Switch
```javascript
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
```

### Object and Class
Using objects, we can store all relevant information in one place, for example, we can put our information and functions that use that information in one object.  
The object has PROPERTY and METHOD. PROPERTY is like a variable and METHOD is like a function associated with an object. Below is an example:
```javascript
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();
```
There are two ways to create a new Object
1. Using **LITERAL NOTATION**
```javascript
var myObj = {
    type: 'fancy',
    disposition: 'sunny',
    speak: function(word) {
        console.log("I fell very " + word);
    }
};
```
2. Using **CONSTRUCTOR NOTATION**
```javascript
var myObj = new Object();
myObj["name"] = "Charlie";
myObj.name = "Charlie";
```
The **Constructor** above can be customized by using function keyword as shown below. When you create constructors, you are in fact defining a new **Class**. The **Class**(customized constructor) is like a "template" from which you can create multiple objects.

Custom constructor can have methods
```javascript
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function() {
        return (this.height + this.width) * 2; 
    ;}
}
var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
```

The defaut constructor and customized constructor that create the same results.
```javascript
// default constructor
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";


// A custommized constructor
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}
harry_potter_CustomConstructor = new Book(320, "J.R.R. Tolkien");
```

**this** keyword refer to whichever object called that method. It can be defined **before** introducing the object, and thus it works for everyone.
```javascript
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
bob.setAge(25)

// make susan here and update Susan's age to 35 using the method
var susan = new Object();
susan.age = 15;
susan.setAge = setAge;

susan.setAge(35)
```

All object has a ```.hasOwnProperty()``` method that returns a **boolean** indicating whether the object has the specified property.
```javascript
var suitcase = {
    shirt: "Hawaiian"
};

console.log(suitcase.shorts);
if (suitcase.hasOwnProperty("shorts") === true) {
    console.log(suitcase.shorts);
}
else {
    suitcase.shorts = "Hi";
    console.log(suitcase.shorts)
}
```
Loop over **property name** and **property value** for the object.
```javascript
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property)    
}
//list all property value
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var prop in nyc) {
    console.log(nyc[prop])    
}
```

Add a new method to a particular object but does NOT exist in other objects.
```javascript
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();
```
Using **prototype** to add methods to the CLASS and make the method applicable to all objects. The below example immediately teaches all Dogs the new method.
```javascript
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();
```

**Inhreitance** allows one class to use the methods and the properties of another class. Below example makes Emperor class inherit from Penguin class
```javascript
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;    
}
Emperor.prototype = new Penguin()

var emperor = new Emperor("test")
//print 2
console.log(emperor.numLegs)
```