function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const result = n1 + n2;

    if(showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}

//number and string data types
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

//object data type
const person = {
    name: 'Max',
    age: 30
}

//array data type
const favoriteActivities: string[] = ['Sports', 'Cooking'];

//tuple data type
const role: [number, string ] = [2, 'author'];

//enum data type
enum Role { ADMIN, READ_ONLY, AUTHOR };

//any data type
let dislikedActivities: any[];

//union data type
let combinedAges: number | string;

//literal data type
let favoriteActivity: 'Sports' | 'Cooking'; 

//type alias
type Combinable = number | string;

//function return type
function add2(n1: number, n2: number): number {
    return n1 + n2;
}

//void return type
function printResult2(num: number): void {
    console.log('Result: ' + num);
}

//function type
let combineValues: (a: number, b: number) => number;

//callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

//unknown data type
let userInput: unknown;

//never data type
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}   

//any data type
let userInput2: any;