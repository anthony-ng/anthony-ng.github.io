// write your tree code here. use a constructor function!
FRUIT_BEARING_AGE = 10;
MAX_AGE = 20;

var Tree = function() {
    this.age = 0;
    this.height = 0;
    this.orangeCount = 0;
    this.isAlive = true;
};

Tree.prototype.grow = function() {
    this.age++;
    this.height += 10;

    if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor((Math.random() * 10) + 1);
    }

    if (this.age > MAX_AGE) {
        this.isAlive = false;
    }
};

Tree.prototype.dropOrange = function() {
    this.orangeCount--;

    return this.orangeCount;
};

var pickOrange = function() {
    var Orange = function() {
        this.diameter = Math.floor((Math.random() * 10) + 1);
    };

    return new Orange();
};