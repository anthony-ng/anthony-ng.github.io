var View = function() {
    this.el = document.getElementsByClassName('grove')[0];
    this.tree = null;

    this.initialize();
};

View.prototype.initialize = function() {
    this.attachPlantListener();
};

View.prototype.attachPlantListener = function() {
    var that = this,
        plantButton = document.getElementById('plant-tree');

    // so this is weird; the tests don't accommodate buttons to perform operations, so we
    //  have to preserve this logic for only pages which contain the button
    if (plantButton) {
        plantButton.addEventListener('click', function() {
            var tree = new Tree();

            that.tree = tree;

            that.renderTree(that.tree);
        });
    }
};

View.prototype.renderTree = function(tree) {
    tree.el = document.getElementById('orange-tree-template').children[0];

    this.el.appendChild(tree.el);

    this.attachPickButtonListener();
    this.attachAgeButtonListener();
};

View.prototype.attachPickButtonListener = function() {
    var that = this,
        pickOrangeButton = document.getElementById('pick-orange');

    // so this is weird; the tests don't accommodate buttons to perform operations, so we
    //  have to preserve this logic for only pages which contain the button
    if (pickOrangeButton) {
        pickOrangeButton.addEventListener('click', function() {
            var fruitCountEl = document.getElementById('fruit-count');

            that.tree.dropOrange();

            fruitCountEl.innerText = that.tree.orangeCount;
        });
    }
};

View.prototype.attachAgeButtonListener = function() {
    var that = this,
        ageTreeButton = document.getElementById('age-tree');

    // so this is weird; the tests don't accommodate buttons to perform operations, so we
    //  have to preserve this logic for only pages which contain the button
    if (ageTreeButton) {
        ageTreeButton.addEventListener('click', function() {
            var ageEl = document.getElementById('age'),
                fruitCountEl = document.getElementById('fruit-count');

            that.tree.grow();

            ageEl.innerText = that.tree.age;
            fruitCountEl.innerText = that.tree.orangeCount;
        });
    }
};