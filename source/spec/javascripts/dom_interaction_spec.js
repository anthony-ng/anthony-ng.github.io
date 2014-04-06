describe ("View", function(){
  var mockGrove;

  beforeEach(function() {
    mockGrove = document.createElement('div')
    mockGrove.className = "grove"
    document.body.appendChild(mockGrove)
  })

  afterEach(function() {
    //deletes the mockGrove object so it doesn't interfere with other tests.
    document.removeChild(mockGrove)
  })

  describe("addTree", function() {
    var mockTemplate;

    beforeEach(function() {
      //creates a fake orange tree template div
      mockTemplate = document.createElement('div')
      mockTemplate.id = "orange-tree-template"

      // create a fake orange tree div
      var orangeTree = document.createElement('div')
      orangeTree.className = "orange-tree"

      // appends the tree div to the template div, just like in orange.html
      mockTemplate.appendChild(orangeTree)
      // appends the template div to the document, in this case
      document.body.appendChild(mockTemplate)
    })

    afterEach(function() {
      //clean up after test.
      document.removeChild(mockTemplate)
    })

    xit("should add a tree to the grove", function(){
      var tree= new Tree()
      View.addTree(tree)
      expect( mockGrove.childElementCount ).toEqual(1);
    });
  })

});
