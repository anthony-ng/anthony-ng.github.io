describe ("View", function() {

    // we create a variable to store our fake 'grove' in the outer scope so that our test
    //  specs can access it
    var mockGrove;

    // we abstract out our 'grove' creation into its own function for readability purposes
    var createGrove = function() {
        mockGrove = document.createElement('div');

        mockGrove.className = "grove";

        document.body.appendChild(mockGrove);
    };

    beforeEach(function() {
        // before each test spec run, we run createGrove to generate the 'grove' DOM element
        createGrove();
    });

    afterEach(function() {
        // after each test spec run, we remove the 'grove' DOM element to create a clean slate
        //  for the next test
        document.body.removeChild(mockGrove);
    });

    describe(".renderTree()", function() {
        var mockTemplate;

        beforeEach(function() {
            //creates a fake orange tree template div
      mockTemplate = document.createElement('div')
      mockTemplate.id = "orange-tree-template"

      // create a fake orange tree div. It's a barebones version of the tree, with
      // no p tags or buttons. You may need to add more complexity to it for future tests
      var orangeTree = document.createElement('div')
      orangeTree.className = "orange-tree"

      // appends the tree div to the template div, just like in orange.html
      mockTemplate.appendChild(orangeTree)
      // appends the template div to the document, in this case
      document.body.appendChild(mockTemplate)
    })

    afterEach(function() {
      // after each test spec run, we remove the 'mockTemplate' DOM elements to create a clean slate
      //  for the next test
      document.body.removeChild(mockTemplate)
    })

    it("should render a tree in the grove", function(){
      var tree = new Tree();
      var view = new View();

      view.renderTree(tree);

      expect(mockGrove.childElementCount).toEqual(1);
    });
  })

});