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