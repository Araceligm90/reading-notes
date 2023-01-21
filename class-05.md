# CLASS 5 READING NOTES

## Putting it all together.

### React docs: thinking in React.


**1. What is the 'single reponsability principle' and how does it apply to components?**

A component should only be doing one thing or solving one problem. If it evolves and ends up growing, it should be decomposed into smaller subcomponents.


**2. What does it mean to build a ‘static’ version of your application?**

It means that you are building an app that will not change. The information will remain as it is and it won't receive any user input. In 'static' apps we use *props* insted or *state* as the latter is only used for interactivity. 

    
**3. Once you have a static application, what do you need to add?**

Only a render() method.

**4. What are the three questions you can ask to determine if something is state?**

    a. Is it passed in from a parent via props? If so, it probably isn’t state.
    b. Does it remain unchanged over time? If so, it probably isn’t state.
    c. Can you compute it based on any other state or props in your component? If so, it isn’t state.

    
**5. How can you identify where state needs to live?**

Follow the below steps:

    a. Identify every component that renders something based on that state.
    b. Find a common owner component (a single component above all the components that need the state in the hierarchy). Either the common owner or another component higher up in the hierarchy should own the state.
    d. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.



## Higher-Order functions.


**1. What is a 'higher-order function'?**

'Higher-order functions' are functions that operate on other functions, either by taking them as arguments or by returning them.


**2. Explore the 'graterThan' function as defined in the reading. In your own words, what is line 2 of this function doing?**

It tells us that if 'm > n' then return true. Or at least is what somebody replied on Stack Overflow to a former Code Fellows student about 3.5 years ago, who had the same clue as me ( none ) about what line 2 does.


**3. Explain how either 'map' or 'reduce' operates, with regards to higher-order functions.**

'map' calls a callback function, which is a function that is triggered when the first function ends.

