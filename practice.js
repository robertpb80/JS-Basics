//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var isTyler = function (name1) {
    if (name1 === 'Tyler') {
        return "true";
    } else {
        return "false";
    };
}

var result = isTyler(name);
alert(result);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
  var promptedName = prompt ("enter your name here:")
    return promptedName;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
    var test1 = getName();
    alert("Welcome " + test1);
}

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

//We were told to skip this one.


//Next Problem



//What is the difference between arguments and parameters?

 //arguments belong to the function invocation, and parameters below to the function definition.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //undefined, null, " ", 0, NaN. To check if it's false write if (variable) { }



//Next Problem



//Create a function called myName that returns your name

var myName = function () {
  var name = prompt("what is your name?");
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName)


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
    return function() {
        var yourName = prompt ("what is your name?")
            return yourName;
    }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn() = outerFn();

//Now invoke innerFn.

innerFn();