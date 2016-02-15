console.log("Hello world!");

console.log(getInitials("Emmanuel", "U"));

var myString = "A string";
var myNumber = 1234;

myString = 12345678;

var myBoolean = true;
console.log(myString);
console.log(myNumber);
console.log(myBoolean);

// En funktion i JavaScript (tänk-metoder)
var myName = "Benjamin"; // Global variable 
var myCity = "Umana";

alert("Say, Hello global " + myName);

function sayHelloWorld() {
    alert("Say, Hello " + myName + " from " + myCity);
    
    var mySchool = "Jensen"; 
    var mySchoolLocation = "Stockholm";
}




console.log("Say, Hello " + myName + " from " + myCity);
//console.log("Say, Hello " + mySchool + " from " + myStockholm);

var a = foo(3);
console.log(a);
function foo(i) {
    "use strict";
    return i * i;
}

if (myName === "Benjamin") {
    console.log("Namnet är lärarens namn!");
}

if (myNumber === 1234) {
    console.log("Variableln myNumber är 1234");
}

if (myNumber === "         1234        ") {
    console.log("Variableln myNumber är \"1234\" ");
}

console.log("Hej \n då \n på en ny rad!");

sayHelloWorld();
function combineName(firstName, lastName) {
    "use strict";
    if(lastName == undefined) {
        var fullName = firstName;
    } else{
        fullName = firstName + "   " + lastName;
    }
    
    return fullName;
}

function getInitials(firstName, lastName) {
    "use strict";
    var firstNameInitial = firstName.charAt(firstName.length).toUpperCase();
    var lastNameInitial = lastName.charAt(0);
    return firstName.charAt(0) + ". " + lastName.charAt(0);
}

var myInitials = getInitials("benjamin", "C");

function demonstrateForLoop() {
    // for-loop -skirv ut 
    for(var i = 0; i <= 10; i++){
        console.log(i);
        }
}
var clicks = 0;

function clickedButton() {
    console.log('Hej! Benjamin');
    
    clicks++;
    
    var myParagraph = document.getElementById("countingString");
    myParagraph.innerHTML=clicks;
    
    console.log(clicks);
}