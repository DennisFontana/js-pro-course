class Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
  }

  getFullName() {
    return `Название марки авто: ${this.name} + Модель: ${this.model}`;
  }
  getAge() {
    let age = 2021;
    return `Текущий год: ${age} Год выпуска авто: ${this.year}. Возраст авто: ${age - this.year}`;
  }
  changeColor(color) {
    if (this.color != color) {
      console.log(`Вы выбрали цвет: ${this.color = color}`);
    } else {
      console.log(`Ваша машина покрашена в ${color}, поменяйте цвет`);
    }
  }
  calculateWay(kilometers, fuel) {
    if (fuel > this.fuelCapacity) {
      console.log("Слишком много топлива");
      return
    }
    let fuelUse = kilometers / 100 * this.fuelConsumption;
    let middleTimeValue = kilometers / 90;
    console.log(`Расстояние пройденного пути: ${kilometers}км,
     Ваше среднее время в пути ${Math.floor(middleTimeValue * 10) / 10} часа`);
    if (fuel < 10) {
      console.log(`И нужно заправить машину на ${this.fuelCapacity - fuel} литра`);
    }
    if (fuelUse > fuel) {
      let numAdd = Math.ceil((fuelUse - fuel) / this.fuelCapacity);
      console.log(`Нужно будет дозаправиться на ${fuelUse - fuel} литров за ${numAdd} раза`)
    }
  }
}

class Bmw extends Car {
  condition = true;
  #country;
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, accelerate) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.accelerate = accelerate
  }
  get countryName() {
    console.log(this.#country);
  }
  set setCountryName(name) {
    if (name != "Germany") {
      console.log("ага, счас");
    } else this.#country = name;
  }
  methodBrainCrazy() {
    console.log(`подберите краску чтобы была в идеал на скорости ${this.maxSpeed}`);
  }
  getFullName() {
    let carInfo = super.getFullName();
    let climate;
    if (this.condition) {
      climate = "ага , класс";
    } else {
      climate = "жутко жарко";
    }
    return `${carInfo}, в машине дует холодненьким: ${climate}`;
  }
}

class Lexus extends Car {
  #CruiseControl = false;
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, typeBody) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.typeBody = typeBody;
  }
   get cruiseControl() {
    console.log(this.#CruiseControl);
   }
  setCruiseControl() {
    if(!this.#CruiseControl) {
      this.#CruiseControl = true;
    } else {
      this.#CruiseControl = false;
    }
    
  }

}

class Chevrolet extends Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, transmision) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
    this.transmision = transmision;
  }
  doorOpenBykickInTheMirror () {
    console.log('Можно же было и ключем открыть, дурында');
  };
}

let bmw = new Bmw('bmw', 'm5', 2016, 'красный', 500, 75, 25, 3.5);
let lexus = new Lexus('bmw', 'm5', 2016, 'красный', 500, 75, 25, 'Внедорожник');
let cevrolet = new Chevrolet('bmw', 'm5', 2016, 'красный', 500, 75, 25, 'автомат');