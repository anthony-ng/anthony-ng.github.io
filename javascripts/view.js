var View = function() {
    this.el = document.getElementsByClassName('grove')[0];
};

View.prototype.renderTree = function(tree) {
    tree.el = document.getElementById('orange-tree-template').children[0];

    this.el.appendChild(tree.el);
};