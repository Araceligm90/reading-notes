# CLASS 9 READING NOTES 

## Functional Programming.


### Functional Programming Concepts.


**1. What is functional programming?**

Functional programming is a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.


**2. What is a pure function and how do we know if something is a pure function?**

It is a function that only works with the parameters that have been passed and doesn’t use global objects as the value of these could change and therefore the whole result would change.


**3. What are the benefits of a pure function?**

The code is easier to test.


**4. What is immutability?**

It means that something, in this case data, cannot be changed. If you've declared a variable a given it a value, the value cannot be changed in that same variable. You would have to create a new one with the desired value.


**5. What is Referential transparency?**

Is the combination of pure functions and immutable data. If a function consistently yields the same result for the same input, it is referentially transparent.



### NODE.JS for beginners.


**1. What is a module?**

It is a file that holds code that has the same functionality in our application. It’s essentially a JavaScript file. 


**2. What does the word ‘require’ do?**

It allows information that is stored in one module to be used in another module. It works more or less like the ‘import’ in React, although it requires a couple more steps.


**3. How do we bring another module into the file that we are working in?**

In the first place, you have to export the information that you want to use in a different module. If we have a function called ‘addTwo’, at the end of the module where the function has been declared we have to export it the following way: module.export = addTwo.

Then we need to import it to the module where we want to use it writing the following: var addTwo = require(‘/count’);


**4. What do we have to do to make a module available?**

Export it in the module where it was originally declared and stored.