# CLASS 1 READING NOTES

## Introduction to React & Components


### Component-based architecture:


**1. What is a component?**

Components are independent and reusable bits of code.


**2. What are the characteristics of a component?**

Reusability, as they can be reused in different situations in different applications, even if some components may be designed for a specific task.

Replaceable, as they may be freely substituted with other similar components.

Not context specific, as they are designed to operate in different environments and contexts.

Extensible, as they can be extended from existing components to provide new behavior.

Encapsulated, as they depict interfaces, which allows the caller to use its functionality, but do not expose details of the internal processes or any internal variables or state.

Independent, as they are designed to have minimal deendencies on other components.


**3. What are the advantages of using component-based architecture?**

It's easy to deploy, it has a reduced cost, it is easy to develop, it's reusable, it modifies the technical complexity, it's reliable, the system maintenance and evolution is easy to change and update, and it offers independency and flexible connectivity of components.


### What is Props and how to use them in React:

**1. What is 'props' short for?**

'Props' is a special keyword in React and stands for properties.

**2. How are props used in React?**

They pass data from one component to another in a uni-directional flow. Furthermore, props data is read-only, hich means that data coming from the parent should not be changed by child components.

Here is how to use Props step by step:

    a. Fistly, define an attribute and its value (data).
    b. Then pass it to child component(s) by isung Props.
    c. Finally, render the Props data.

**3. What is the flow of props?**

Uni-directional, always one way from parent to child.


## Things I want to learn more about

1. In general I am still pretty lost and some of the information I have read I haven't fully understood, so I will have to wait until we put the whole thing in action in order to fully understand what's going on.