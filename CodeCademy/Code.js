/*
To open a server from python
python -m SimpleHTTPServer
*/

///////////////////////////////////////////////////JavaScript//////////////////////////////////////////////////
/*
What can we use JavaScript for?
- make website respond to user interaction
- build apps and games (e.g. blackjack)
- access information on the Internet (e.g. find out the top trending words on Twitter by topic)
- organize and present data (e.g. automate spreadsheet work; data visualization)
*/


//Pop up a window box
confirm("This is a window box");

//ask for a input
prompt("What is your name?")


//print out
console.log(2 * 5)
console.log("Hello")

//JavaScript read 0 as false and 1 as true

///////////////////////////////////////////////////String Manipulation//////////////////////////////////////////////////
//String Length
"daniel".length
//Substring (note: JavaScript string is ZERO based)
"wonderful day".substring(3, 7)



/* List of comparison opeartors
- === Equal to
- !== Not equal to
 */
//Return a Boolean data tyle
"I'm coding lieka champ".length > 10



///////////////////////////////////////////////////IF STATEMENT//////////////////////////////////////////////////
if ("daniel".length >= 3 ) {
    console.log("You have a long name!");
}
if ("life is not beautiful".length > 100 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("always remember life is beautiful!")
}


///////////////////////////////////////////////////Variable and Function/////////////////////////////////////////////
//delare Variable
var myAge = 28;
var age = prompt("What's your age");

//Scope
/*
Variables defined outside a function are accessible anywhere once they have been declared. 
They are called global variables and their scope is global.
Variables defined inside a function are local variables. They cannot be accessed outside of that function.
*/

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


///////////////////////////////////////////////////For Loop/////////////////////////////////////////////
for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

//Array
/*
a. store lists of data
b. can store different data types at the same time
c. are ordered so the position of each piece of data is fixed
 */
var junk = ['a', 'b', 1, 2]
console.log(junk)


var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Beijing", "Xuchang"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}


///////////////////////////////////////////////////While/////////////////////////////////////////////
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


///////////////////////////////////////////////////Switch/////////////////////////////////////////////
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


///////////////////////////////////////////////////Object/////////////////////////////////////////////
/* Using objects, we can store all relevant information in one place,
for example, we can put our information and functions
that use that information in one object.

The object has property and method. Property is like a variable and method is 
like a function associated with an object
*/
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//two ways to create a new objects
//First - Using object literal notation
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
//Second - Using the constructor
var myObj = new Object();
myObj["name"] = "Charlie";
myObj.name = "Charlie";

//"this" keyword refer to whichever object called that method. It can be defined before 
//introducing the object, and thus it works for everyone.

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


/*
Custom constructor
Instead of using the Object constructor which is empty and has no properties,
we can make our own constructor which have properties
*/
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

//Custom constructor can have methods
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
        return (this.height + this.width) * 2; 
    ;}
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

//difference between defaut constructor and customized constructor
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";


// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}
// Use our new constructor to make the_hobbit in one line
harry_potter_CustomConstructor = new Book(320, "J.R.R. Tolkien");