// Создаем пустой объект
let myObject = {};

// Добавляем несколько свойств со значениями разных типов
myObject.name = "John";
myObject.age = 30;
myObject.isStudent = false;

// Добавляем метод
myObject.greet = function() {
    console.log("Hello, my name is " + this.name + ".");
};

// Вызываем метод
myObject.greet();

// Проверяем текущие свойства объекта
console.log("Свойства объекта до удаления:");
console.log(myObject);

// Удаляем одно из созданных свойств
delete myObject.age;

// Проверяем свойства объекта после удаления
console.log("Свойства объекта после удаления:");
console.log(myObject);
/*
Напишите функцию, которая создает пустой объект, но без прототипа.
*/
function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

const emptyObject = createEmptyObjectWithoutPrototype();
console.log(emptyObject);
/*
Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство 
с данным именем. Функция должна возвращать true или false.
*/
function checkPropertyExists(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

const sampleObject = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const propertyToCheck = "age";
const propertyExists = checkPropertyExists(propertyToCheck, sampleObject);
console.log(propertyExists);
/*
Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных
 свойств. Данная функция не должна возвращать значение.
*/
function showOwnProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

const person = {
    name: "John Doe",
    age: 30
};

showOwnProperties(person);
function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricalDevice.prototype.switchOn = function() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
}

ElectricalDevice.prototype.switchOff = function() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
}

function DeskLamp(name, power, brightness) {
    ElectricalDevice.call(this, name, power);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name}: яркость установлена на ${newBrightness}.`);
}

function Computer(name, power, brand) {
    ElectricalDevice.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.checkEmails = function() {
    console.log(`${this.brand} компьютер ${this.name}: Проверка почты...`);
}

// Создаем экземпляры приборов
const deskLamp = new DeskLamp('Настольная лампа', 20, 50);
const computer = new Computer('Компьютер', 300, 'Dell');

// Включаем приборы и выводим потребляемую мощность
deskLamp.switchOn();
computer.switchOn();

let totalPower = deskLamp.power + computer.power;
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);