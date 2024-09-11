// ----TIPOS DE DATOS----
// string
var miString1 = 'Hola mundo';
var miString2 = 1234 + '';
var miString3 = 'Hola mundo con tipo de dato string';
// number
var miNumber = 1234;
// boolean
var miBool = true;
// any
var miVar = 'Hola mundo con tipo de dato any';
miVar = 1234;
miVar = false;
// array
var anyArray = ['apple', 128, true, { nombre: 'kevin' }];
var stringArray = ['apple', 'banana', 'orange', 'cherry'];
var numberArray = [28, 120, 4, 67];
var booleanArray = [true, false, false, true];
// tuplas
var stringNumberTupla;
stringNumberTupla = ['apple', 30];
//const
var PI = 3.14;
//void
var miVoid = undefined;
//undefined
var miUndefined = undefined;
//null
var miNull = null;
typeof (miNull);
//funciones
function getSum(num1, num2) {
    return num1 + num2;
}
function getName(name, lastName) {
    return "Name: ".concat(name, " - Lastname: ").concat(lastName);
}
function miFuncionVoid() {
    return;
}
;
function showInfo(ToDo) {
    console.log("".concat(ToDo.title, " - ").concat(ToDo.text));
}
var miToDo = {
    title: 'Clase 4',
    text: 'interface'
};
showInfo(miToDo);
//Clases
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " ha sido registrado"));
    };
    return User;
}());
var user1 = new User('Kevin');
document.write(user1.name);
user1.register();
