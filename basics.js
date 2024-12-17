function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return fact(n-1)*n;
    }
}

function factorize(n){
    return n/2;
}




console.log(3>2);

console.log(false && false);

console.log(true && true );

console.log(true?"yes":"no");

console.log(undefined, null);

console.log("autoisave is on");

console.log(8*null);

console.log("5"+1);

console.log("5"-1);

console.log("five"*2);

console.log(false == 0);


console.log(""==false);
console.log(""===false);

let d_= 5*5;



console.log(d_*10);
//  const prompt = require('prompt-sync')();
// prompt("Hello");

console.log(Math.sqrt(25));
let x = 10;


for(let i=0; i<=10;++i){
    console.log(i);
}

let name = "George Michael Tadros";

console.log(name.length);

const funcx = function(x){
    return x;
}

console.log(funcx(3));

console.log(futureSays())

function futureSays(){
    return "${funcx(3)}";
}



let descriptoin = {
    key : "value",
    "place" : "here"
}

console.log(descriptoin.place);
console.log(descriptoin);


let my_list = ["Here", "there"];

let obj = {
    name: "Geor",
    age: 29
};

console.log(obj.age);
console.log(obj.name);


console.log(Object.keys(obj));

console.log("name" in obj);

switch(x){
    case 3:
        console.log("3");
        break;
    case 4:
        console.log(4);
        break;
    default:
        console.log(x)

}

let numbers = [40,3,4,5,6]
console.log(numbers[1]);

console.log(numbers[0]);

console.log("null".length)

console.log("here")

console.log("He&"["length"]);

object_any = {
    name : "George",
    age: 24
};
console.log(object_any.length);
let two_dimentional_arr = [[1,2,3,5],[1,2,3,4]];
console.log(([1,2,3,4]));
let one_dimentional_array  = [1,2,3,4]; 

console.log([1,2],[3,4]);

console.log(two_dimentional_arr[0][1]);

console.log(two_dimentional_arr);

console.log(one_dimentional_array);
for(let element of one_dimentional_array){
    console.log(element);
}

one_dimentioanl_array = one_dimentional_array.unshift
console.log(one_dimentional_array);

"LA".repeat(3)

console.log("George");
console.log(JSON.stringify({name:"Geogre"}));

let rabbit =  {
    x: 3,
   speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);   }
}
let Person = {
     name : "efsf"
};

console.log(Person.name);
let desertRabbit = Object.create(rabbit);
desertRabbit.type = "desert rabbit";
console.log(desertRabbit.speak("Hello"));
console.log(desertRabbit.x);

let Lion = {
    roar(roarSound){
      console.log(`the ${this.type} roar like this ${roarSound}`);
    }
}

let africanLion = Object.create(Lion);

africanLion.type = "African Lion";


class Sheeta{

    constructor(type){
        this.type = type;
    }

    speak(roar){
       console.log(`The sheeta of type ${this.type} roar like this ${roar}`);
    }
}


let africanSheeta = new Sheeta("African Sheeta");
africanSheeta.speak("Roarrrrrr!!!");



class AboutMe{
    constructor(){

    }
    #getASecretAboutMe(){
        return "Fear not be abiling to do anything";
    }
    
    knowSomethingPrivate(){
        return this.#getASecretAboutMe();
    }

}

let me = new AboutMe();

console.log(me.knowSomethingPrivate());

let ages = new Map();
ages.set("George", 26);
ages.set("John", 28);

console.log(ages);


class Temperature{
    #value;
    constructor (){
      
    }

    set setValue(temperature){
        this.#value = temperature;
    }

    get getValue(){return this.#value;}

     convertToCelisus(){
        return ((5/9) * (this.getValue()-39));
    }
}

let instanceTemperature = new Temperature();

console.log(2 * "Monkey");

// //this keyword use strict is used to 
// //tell the function or class or block to be stricked and not torrelate erros this provide a safer mode for developers
// function canYouSpotTheProblem() {
// "use strict";
// for (counter = 0; counter < 5; counter++) {
// console.log("Happy happy");
// }
// }
// canYouSpotTheProblem();


// function division(nom, donm){
//     try{
//     console.log(nom/donm);

//     }
//     catch(error){
//        console.log(error); 
//     }
// }

// division(3,2);
// division(6,2);
// division("dfd","sfd");

// function safeDivision(nom, domn){
//     if(domn != 0){
//         return nom/domn;
//     }
//     else{
//         throw new Error("Can not divide by zero");
//     }
// }

// console.log(safeDivision(4,2));

// console.log(safeDivision(4,0));

//regular experssions two ways definition
let reg = RegExp("abc");
let reg1 = /abc/;


console.log(reg.test("abcsd"))

console.log(reg.test("34243ab"));

console.log(reg.test("asjabclkajfl"));


// \p{L} Any letter
// \p{N} Any numeric character
// \p{P} Any punctuation character
// \P{L} Any nonletter (uppercase P inverts)
// \p{Script=Hangul} Any character from the given script (see C




// /abc/ A sequence of characters
// /[abc]/ Any character from a set of characters
// /[^abc]/ Any character not in a set of characters
// /[0-9]/ Any character in a range of characters
// /x+/ One or more occurrences of the pattern x
// /x+?/ One or more occurrences, nongreedy
// /x*/ Zero or more occurrences
// /x?/ Zero or one occurrence
// /x{2,4}/ Two to four occurrences
// /(abc)/ A group
// /a|b|c/ Any one of several patterns
// /\d/ Any digit character
// /\w/ An alphanumeric character (“word character”)
// /\s/ Any whitespace character
// /./ Any character except newlines
// /\p{L}/u Any letter character
// /^/ Start of input
// /$/ End of input
// /(?=a)/ A look-ahead test


// //import example
// import {xname} from "/import_example.js";

// // console.log(xname);
// fetch("sample_text.txt")
//   .then((res) => res.text())
//   .then((text) => {
//      console.log(text);
//    })
//   .catch((e) => console.error(e));

// readTextFile("sample_text.txt", content => {
//     console.log(`Shopping List:\n${content}`);
//     });



// Generators
// This ability of functions to be paused and then resumed again is not exclusive
// to async functions. JavaScript also has a feature called generator functions.
// These are similar, but without the promises.
// When you define a function with function* (placing an asterisk after the
// word function), it becomes a generator. When you call a generator, it returns
// an iterator, which we already saw in Chapter 6.
function* powers(n) {
for (let current = n;; current *= n) {
yield current;
}
}
for (let power of powers(3)) {
if (power > 50) break;
console.log(power);
}



function getFinalPrice(price, discount){
    return  price / discount;
}

console.log(getFinalPrice(3.4,5.6));


