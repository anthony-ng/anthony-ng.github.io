## Orange Trees
1. [Learning Objectives](#learning-objectives)
1. [Summary](#summary)
1. [Releases](#releases)
1. [Helpful Resources](#helpful-resources)

#### ** DO NOT MERGE SOLUTION PULL REQUESTS INTO THIS REPOSITORY **

## Learning Objectives
1. Use Jasmine to TDD JavaScript code.
1. Understand basic JavaScript - functions, control structures, scope.
1. Refactor code OO JavaScript using object literals and objects created with a
   constructor function
1. Use jQuery to display and manipulate JavaScript Objects in the DOM.

## Summary
Remember our old friend **Orange Trees** from Ruby? Let's revisit it in
JavaScript.

Start your test server by running `rake jasmine`

Here are some features:
* A tree can age.
* For each year the tree ages up to it's fruit bearing age, it gets taller.
* After a tree reaches fruit bearing age, it can grow fruit.
* A tree grows a random amount of oranges each year it ages (after reaching fruit bearing age)
* An orange has a random diameter.
* You can pick all the fruit that grows each year and put it in a basket.
* You can know the number of fruit in the basket and the average diameter of that fruit at any time.
* Any un-picked fruit dies when the tree ages again.
* The fruit basket is emptied each year.
* A tree dies after it ages for it's max age years and can no longer bear fruit.

## Releases


### Release 1
Here we'll be building objects with functions. In this release we will create an
orange tree, age the tree, grow oranges on the tree, and pick fruit off the
tree.  We will model all of this using JavaScript functions and
Plain-Old-JavaScript-Objects(aka Object-Literals).

* One by one, make the
  [plain-old-js-objects-spec](spec/javascripts/plain_old_js_objects_spec.js)
  pass without using prototypes or constructor functions. Use the
  [plain-old-js-objects](public/javascripts/plain-old-js-objects.js) file.
* Refactor your javascript source files!
* Refactor your spec files!

### Release 2
In this release we will AGAIN create an orange tree, age the tree, grow oranges
on the tree, and pick fruit off the tree.  We will model all of this using
JavaScript constructor functions and Prototypes.

* One by one, copy the plain old js objects spec into the typed objects spec.
  However, change them to use the `new OrangeTree` and `prototype` syntax as you
  do. use the `javascripts/typed-js-objects.js` file.
* Refactor your javascript source files!
* Refactor your spec files!


### Release 3
Now let's add some interaction with the DOM. Write your DOM interaction code in
`view.js`. Use either the objects you built in release 1 or 2.

Feel free to either write the javascript first or the tests first.  It's totally
up to you.

* Write a test that allows you to `plant` a tree by clicking a button. It should
  be visible on the screen somehow. Make it pass
* Write a test that allows you to `pick` a tree off an orange by clicking a
  button. Make it pass.
* Write a test that allows you to `age` a tree by clicking a button. Make it
  pass.


### Release 4
* Have some fun.  Can you add a pear tree? Can you do it TDD?

Submit a Pull Request after each Release.

**DO NOT MERGE SOLUTION PULL REQUESTS INTO THIS REPOSITORY**

## Helpful Resources
1. [tryJasmine.com](http://tryjasmine.com)
1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Jasmine Documentation](http://pivotal.github.io/jasmine/)
1. [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
1. [Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
1. [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
