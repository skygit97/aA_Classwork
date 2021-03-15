Function.prototype.inherits = function(Parent) {
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

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

Ship.inherits(MovingObject);

Ship.prototype.passengers = function () {
    console.log(`${this.name} has passengers!`)
};

function Asteroid(name, speed) {
    this.name = name;
    this.speed = speed;
}

Asteroid.inherits(MovingObject);
Asteroid.prototype.travels = function () {
    console.log(`${this.name} travels through the air at ${this.speed} mph!`);
};

let frisbee = new MovingObject("frisbee");
console.log(frisbee);
console.log(frisbee.moves());
// console.log(frisbee.travels());
// console.log(frisbee.passengers());



