function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}.`;
};

const cat1 = new Cat('Garfield', 'Tom');
const cat2 = new Cat('Cat', 'Jerry');

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}!`;
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function() {
  return `${this.name} meows`;
};

console.log(cat1.meow());
console.log(cat2.meow());

cat1.meow = function () {
  return `${this.name} meowssss`;
};

console.log(cat1.meow());
console.log(cat2.meow());
