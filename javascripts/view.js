var View = function() {
    this.el = document.getElementsByClassName('grove')[0];

    this.initialize();
};

View.prototype.initialize = function() {
    console.log('haha');

    this.attachEventListeners();
};

View.prototype.attachEventListeners = function() {
    var that = this,
        plantButton = document.getElementById('plant-tree');

    if (plantButton) {
        plantButton.addEventListener('click', function() {
            var tree = new Tree();

            that.renderTree(tree);
        });
    }
};

View.prototype.renderTree = function(tree) {
    tree.el = document.getElementById('orange-tree-template').children[0];

    this.el.appendChild(tree.el);
};