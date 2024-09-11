// ----TIPOS DE DATOS----
// string
let miString1 = 'Hola mundo';

let miString2 = 1234 + '';

let miString3: string = 'Hola mundo con tipo de dato string';

// number
let miNumber: number = 1234;

// boolean
let miBool: boolean = true;

// any
let miVar: any = 'Hola mundo con tipo de dato any';
miVar = 1234;
miVar = false;

// array
let anyArray: any[] = ['apple', 128, true, {nombre: 'kevin'}];

let stringArray: string[] = ['apple', 'banana', 'orange', 'cherry'];

let numberArray: number[] = [28, 120, 4, 67];

let booleanArray: boolean[] = [true, false, false, true];

// tuplas
let stringNumberTupla: [string, number];
stringNumberTupla = ['apple', 30];

//const
const PI = 3.14;

//void
let miVoid: void = undefined;

//undefined
let miUndefined: undefined = undefined;

//null
let miNull: null = null;

typeof(miNull);

//funciones
function getSum(num1: number, num2: number){
    return num1 + num2;
}

function getName(name: string, lastName: string){
    return `Name: ${name} - Lastname: ${lastName}`
}

function miFuncionVoid(){
    return
};

//interface
interface IToDo{
    title: string,
    text: string;
}

function showInfo(ToDo: IToDo){
    console.log(`${ToDo.title} - ${ToDo.text}`);
}

let miToDo: IToDo = {
    title: 'Clase 4',
    text: 'interface'
}

showInfo(miToDo);

//Clases
class User{
    public name: string;
    public email: string;
    private edad: number;

    register(){
        console.log(`${this.name} ha sido registrado`);
    }

    constructor(name: string){
        this.name = name;
    }
}

let user1 = new User('Kevin')
document.write(user1.name);
user1.register();