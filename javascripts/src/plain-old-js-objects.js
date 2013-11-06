/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 3
MAX_AGE = 100

function createTree() {
  var ourTree = {
    age: 0, 
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function() {
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += (Math.random(10))
      }
      if (this.age > MAX_AGE) {
        this.isAlive = false;
      }
    },
    dropOrange: function() { 
      return this.orangeCount -= 1;
    },
  }
return ourTree;
}

function createOrange() {
      var orange = {
        diameter: Math.random(5)+1
      }
      return orange;
    }
