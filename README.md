# Orange Trees

## Learning Competencies
1. Use Testing to TDD JavaScript code with Jasmine.
1. Understand basic JavaScript - functions, control structures, scope.
1. Refactor code OO JavaScript using object literals and objects created with a
   constructor function
1. Use jQuery to display and manipulate JavaScript Objects in the DOM.

## Summary

Remember our old friend **Orange Trees** from Ruby? Let's revisit it in JavaScript.

Here are some features:
* A tree can age.
* For each year the tree ages up to it's fruit bearing age, it gets taller.
* After a tree reaches fruit bearing age, it can grow fruit.
* A tree grows a random amount of oranges each year it ages (after reaching fruit bearing age)
* An orange has a random diameter.
* You can pick all the fruit that grows each year. 
* Any un-picked fruit dies when the tree ages again.
* A tree dies after it ages for it's max age years and can no longer bear fruit.  

## Releases

### Release 0 : Working with Jasmine

We've written a lot of tests for you in Jasmine, your job is to write the code to make these tests pass.  Start your test server by running `rake jasmine`.  You should see your first failing test.  Write code in `src/plain-old-js-objects.js` to make this test pass.  Then uncomment the next test (change the `xit` to `it`) and keep going.

### Release 1 : Plain Old JavaScript Objects (Object Literals)

Here we'll be building objects with functions. In this release we will create an
orange tree, age the tree, grow oranges on the tree, and pick fruit off the
tree.  We will model all of this using JavaScript functions and
Plain-Old-JavaScript-Objects(aka Object-Literals).

* One by one, make the
  [plain-old-js-objects-spec](./spec/javascripts/plain_old_js_objects_spec.js)
  pass without using prototypes or constructor functions. Use the
  [plain-old-js-objects](./javascripts/plain-old-js-objects.js) file.
* Refactor your JavaScript source files!
* Refactor your spec files!

### Release 2 : JavaScript Constructor Function Objects

In this release we will AGAIN create an orange tree, age the tree, grow oranges
on the tree, and pick fruit off the tree.  We will model all of this using
JavaScript constructor functions and Prototypes.

* One by one, copy the plain old js objects spec into the typed objects spec.
  However, change them to use the `new OrangeTree` and `prototype` syntax as you
  do. use the `javascripts/typed-js-objects.js` file.
* Refactor your JavaScript source files!
* Refactor your spec files!


### Release 3 : The view

Now let's add some interaction with the DOM. Write your DOM interaction code in
`view.js` using the [jQuery library](http://jquery.com/). Use either the objects you built in release 1 or 2.

In this release, let's try writing the code first and then the tests.

* Write code that allows you to `plant` a tree by clicking a button. It should
  be visible on the screen somehow. (There is a tree image in the images file you may use)
* Write code that allows you to `age` a tree by clicking a button.  If you age the tree enough there should be oranges that appear on the tree (use the orange image)
* Write code that allows you to `pick` a tree off an orange by clicking a
  button. 
 
### Release 4

Explore the `jasmine-jquery` gem to write tests for the jQuery code in the previous release.

### Release 5

* Have some fun.  Can you add a pear tree? Can you do it TDD? 
* Can you pick all the fruit that grows each year and put it in a basket?
* Can you know the number of fruit in the basket and the average diameter of that fruit at any time?

## Resources

1. [tryJasmine.com](http://tryjasmine.com)
1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Jasmine Documentation](http://pivotal.github.io/jasmine/)
1. [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
1. [Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
1. [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
