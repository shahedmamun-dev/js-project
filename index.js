/*console.log("I like coding!");
console.log("It's really good.");

window.alert("I really love coding.");

// This is a comment.

/*
This is multiline comment.
Hello.


*/

// const variable = new Date();
// let mamun = variable;
// document.getElementById("demo").innerHTML = mamun;


// function isLeapYear(year) {
//     if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
//         console.log(`${year} is a leap year!`);
//     } else {
//         console.log(`${year} is not a leap year!`);
//     }

// }

// const mamun = isLeapYear(2026);

// document.getElementById("demo").innerHTML = mamun;


// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if(vowels.includes(value)) {
//             count++;
//         }
//     })

//     return count;
// }

// let mamun = countVowels("I love Bangladesh");

// document.getElementById("demo").innerHTML = mamun;



// function myFunction() {
//     alert("hello world");
// }
// myFunction();


// function myFunction() {
//     return "Hello";
// }

// document.getElementById("demo").innerHTML = myFunction;

// const person = {
//     name: "John",
//     age: "50"
// }

// alert(person.name + " is " + person.age);

// const sentence = "lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem Cum voluptatem beatae officiis amet";

// const matches = sentence.match(/lorem/gi);
// const occurances = matches ? matches.length : 0;

// // let mamun = occurances;

// const position = sentence.search(/loremm/i);

// positionn = position >= 0 ? position : "not found!";

// let mamun = positionn;

// document.getElementById("demo").innerHTML = mamun;

// function changeColor(element) {
//     var curentColor = element.style.backgroundColor;
//     if (curentColor == "red") {
//         element.style.backgroundColor = "green";
//     } else {
//         element.style.backgroundColor = "red";
//     }
// }

// function changeWidth(test) {
//     var currentWidth = test.style.width;
//     if (currentWidth == "100px") {
//         test.style.width = "200px";
    
//     } else {
//         test.style.width = "100px";
//     }
// }

// function changeFontSize (font) {
//     var currentFontSize = font.style.fontSize;
//     if (currentFontSize == "10px") {
//         font.style.fontSize = "20px";
//     } else {
//         font.style.fontSize = "10px";
//     }
// }


function changeImage() {
 var im =   document.getElementById("demo").src = "./sm.png";
    document.getElementById("demo").style.border = "10px solid gray";
    Document.getElementById("demo").style.float = "right";
    if (im == "./Untitled.png") {
        document.getElementById("demo").src = "./sm.png";
    } else {
        document.getElementById("demo").src = "./Untitled.png";
    }
}

function show() {
    document.getElementById("demo").style.display = "block";
}

function hide () {
    document.getElementById("demo").style.display = "none"; 
}


var banana = {  //object
    color: "Yellow",
    size: "long",
    quanity: 3,
    isSweet: true,
};

document.getElementById("demo2").innerHTML = 
"Banana <br>" +
"Color: " + banana.color + "<br>" +
"Size: " + banana.size + "<br>" +
"Quantity: " + banana.quanity + "<br>" +
"Dose it taste sweet: " + banana.isSweet;

var varibale1 =["Tomatoe", "LadiesFinger", "Law"]; // areay

document.getElementById("demo3").innerHTML = "No 1:" + varibale1[0];

function addNumbers(num1, num2) {
    var sum  = num1 + num2;
    return sum;
}

document.getElementById("demo4").innerHTML = addNumbers(7, 5);

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

document.getElementById("demo5").innerHTML = getFullName("Shahed", "Mamun");

function toMiles(kilometer){
    var miles = kilometer * 0.62137;
    return kilometer + " Km/s " + "equals " + miles + " mls/s.";
}

document.getElementById("demo6").innerHTML = toMiles(7);

var person2 = {
    name : "John Doe",
    age : 30,
    hobbies: ["coding", "playing", "running"]
}

document.getElementById("demo7").innerHTML = 
person2["name"] + "<br>" +
person2["age"] + "<br>" +
person2["hobbies"][0];

