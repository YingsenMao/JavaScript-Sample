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