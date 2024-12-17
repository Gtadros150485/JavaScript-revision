let string_variable :string;
string_variable = "here";
console.log(string_variable);


function doubling(num:number):number{
    return num*2;
}
class Student{
    
    private name:string;
    private id: number;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

    public getId():number{
        return this.id;
    }

}
console.log(doubling(4));

let student:Student = new Student(5,"George");

console.log(student);

console.log(student.getName());


function getFinal(price:number, discount:number):number{
    return price - price / discount;
}

console.log(getFinal(3.4,5.6))


