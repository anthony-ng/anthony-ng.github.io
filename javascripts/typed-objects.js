FRUIT_BEARING_AGE = 10;

var Tree = function() {
    this.age = 0;
    this.height = 0;
    this.orangeCount = 0;
};

Tree.prototype.grow = function() {
    this.age++;
    this.height += 10;

    if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor((Math.random() * 10) + 1);
    }
};