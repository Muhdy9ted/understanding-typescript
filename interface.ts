interface Person{
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log('Hi')
        }
    }
};

user1.greet('Hi there - I am');

interface Named{
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{
    name?: string;
    greet(phrase: string): void;
}

class PersonClass implements Greetable{
    name?: string;
    age = 30;

    constructor(n?: string){
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
}