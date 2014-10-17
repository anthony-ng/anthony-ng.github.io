# Orange Trees & Jasmine Challenge

### Learning Competencies

* Write OO JavaScript using constructor functions and prototypal methods
* Begin working with MVC concepts in JavaScript
* Unit test JavaScript code using the Jasmine JS testing framework
* Gain familiarity with using [HTML5 Boilerplate](http://html5boilerplate.com/) to utilize HTML/CSS best practices
* Gain familiarity with file structure/naming conventions

### Summary

Remember our old friend **Orange Trees** from Ruby? Let's revisit it in JavaScript.

We'll be utilizing some MVC concepts to create the tree and its corresponding view.

The tree represents the "model" in MVC, and contains data-related properties and methods. It
should NOT contain HTML, CSS, or references to the DOM, if we can help it. Models are *just
data*.

Read through the test specs in the `test/spec/tree.spec.js` file to determine what features
(properties and methods) the tree should have.

The view represents the "view" in MVC, and contains UI-related properties and methods. It MAY
contain HTML, CSS, and references to the DOM, as well as a reference to the model, our tree.
Our view represents the *user interface*, as well as the *event bindings* associated with the UI.

Read through the test specs in the `test/spec/view.spec.js` file to determine what features the
view should have. Note that you may have to write additional tests once your view is feature-complete!

### Releases

##### Release 0 : Working with Jasmine

We've written a lot of tests for you in Jasmine. Your job is to write the code for the model and
view to make these tests pass.

Open `SpecRunner.html`, found in the `test` directory. You should see your first failing test.

Write code in `javascripts/tree.js` to make this test pass.  Then uncomment the next test (change
the `xit` to `it`) and keep going until all the specs are passing.

### Release 1 : Prototype-Based Object-Oriented Javascript

In this release we will create an orange tree, age the tree, grow oranges
on the tree, and pick fruit off the tree.  We will model all of this using
JavaScript constructors and prototypes.


* One by one, make the
  [typed-objects-spec](./spec/javascripts/typed-objects-spec.js)
  pass. Use the
  [typed-objects](./javascripts/typed-objects.js) file.
* Refactor your JavaScript source files!
* Refactor your spec files!


### Release 2 : The View

Now let's add some interaction with the DOM. Write your DOM interaction code in
`view.js`. Use the objects you built in release 1.

* Write code that allows you to `plant` a tree by clicking a button. It should
  be visible on the screen somehow. (There is a tree image in the images file you may use)
* Write code that allows you to `age` a tree by clicking a button.  If you age the tree enough there should be oranges that appear on the tree (use the orange image)
* Write code that allows you to `pick` a tree off an orange by clicking a
  button.

Testing DOM-interactive JavaScript with Jasmine requires a lot of setup, since
SpecRunner.html has no way to access the HTML in orange.html. You have to create mock
HTML objects in your testing suite for any of your view.js tests to run.

We've already given you one pending test example in `view_spec.js`, although it may
not exactly match the architecture of your program. Get it working, and then continue to
test all your functions that create, read, update, or delete anything from the DOM.

### Release 3: Plain Old JS Objects (Optional)

The [plain-old-js-objects-spec](./spec/javascripts/plain-old-js-objects-spec.js) 
is orange trees using Object Literal Notation. Can you rewrite your orange tree
code, making these specs pass, without using prototypes or constructor functions? 
Use the [plain-old-js-objects](./javascripts/plain-old-js-objects.js) file and uncomment the `<source>` tag in SpecRunner.html.

* One by one, make the
  [plain-old-js-objects-spec](./spec/javascripts/plain-old-js-objects-spec.js)
  pass. Use the
  [plain-old-js-objects](./javascripts/plain-old-js-objects.js) file.
* Refactor your JavaScript source files!
* Refactor your spec files!

### Release 4

* Have some fun.  Can you add a pear tree? Can you do it TDD?
* Can you pick all the fruit that grows each year and put it in a basket?
* Can you know the number of fruit in the basket and the average diameter of that fruit at any time?

## Resources

1. [tryJasmine.com](http://tryjasmine.com)
1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Jasmine Documentation](http://pivotal.github.io/jasmine/)
1. [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
1. [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
