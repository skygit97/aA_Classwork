// Function.prototype.inherits = function(Parent) {
//     function Surrogate() {};
//     Surrogate.prototype = Parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

function MovingObject(name) {
   this.name = name;
}

MovingObject.prototype.moves = function () {
    console.log(`${this.name} is moving!`);
};

function Ship(name, color) {
        this.name = name;
        this.color = color;
}

Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constuctor = MovingObject;

Ship.prototype.passengers = function () {
    console.log(`${this.name} has passengers!`)
};

function Asteroid(name, speed) {
    this.name = name;
    this.speed = speed;
}

Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constuctor = MovingObject;


Asteroid.prototype.travels = function () {
    console.log(`${this.name} travels through the air at ${this.speed} mph!`);
};

let asteroid = new Asteroid("SS", "100");
console.log(asteroid);
console.log(asteroid.moves());
console.log(asteroid.travels());
// console.log(asteroid.passengers());



