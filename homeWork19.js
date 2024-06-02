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