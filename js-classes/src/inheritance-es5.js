function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity;
  this.fuelConsumption = fuelConsumption;
}

Car.prototype = {
  getFullName: function () {
    return `Название марки авто: ${this.name} + Модель: ${this.model}`;
  },
  getAge: function () {
    let age = 2021;
    return `Текущий год: ${age} Год выпуска авто: ${this.year}. Возраст авто: ${age - this.year}`;
  },
  changeColor: function (color) {
    if (this.color != color) {
      console.log(`Вы выбрали цвет: ${this.color = color}`);
    } else {
      console.log(`Ваша машина покрашена в ${color}, поменяйте цвет`);
    }
  },
  calculateWay: function (kilometers, fuel) {
    let middleTimeValue = kilometers / 90;
    console.log(`Расстояние пройденного пути: ${kilometers}км,
     Ваше среднее время в пути ${Math.floor(middleTimeValue * 10) / 10} часа`);
    if (fuel < 10) {
      console.log(`И нужно заправить машину на ${this.fuelCapacity - fuel} литра`);
    }
  }
};
// Cоздаю дочерние классы 
function Bmw() {
  Car.apply(this, arguments);
  this.condition = true;
}
Bmw.prototype = Object.create(Car.prototype);

function Lexus() {
  Car.apply(this, arguments);
  this.openRoof = true;
}
Lexus.prototype = Object.create(Car.prototype);

Lexus.prototype.cruiseControl = function () {
  console.log('Вы включили функцию круиз контроль, Поздравляю');
};

function Chevrolet() {
  Car.apply(this, arguments);
}

Chevrolet.prototype = Object.create(Car.prototype);
Chevrolet.prototype.doorOpenBykickInTheMirror = function () {
  console.log('Можно же было и ключем открыть, дурында');
};

let bmw = new Bmw('bmw', 'x5', 2016, 'красный');
let lexus = new Lexus("lexus", "shmexus", 1000, "красный");
let chevrolet = new Chevrolet('chevrolet', 'malibu', 1996, 'розовый');