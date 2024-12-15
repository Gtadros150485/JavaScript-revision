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