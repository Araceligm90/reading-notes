# CLASS 2 READING NOTES

## State & Props


### React lifecycle:


**1. Based off the diagram, what happens first, the 'render' or the 'componentDidMount'?**

The 'render phase' goes first and the 'componentDidMount', which belongs to the 'commit phase', goes last.


**2. What is the very thing to happen in the lifecycle of React?**

The 'mounting phase'. During this phase the component is created and indersted into the DOM. And the very first thing is to call the constructor before it's mounted.


**3. Put the following things in the order that they happen: 'componentDidMount', 'render', 'constructor', 'componentWillUnmount' and 'React Updates'.**

    a. Constructor
    b. Render
    c. React Updates
    d. componentDidMount
    e. componentWillUnmount



### React State Vs Props:


**1. What types of things can you pass in the props?**

Props are like arguments to a function. They are useful when you want to display information, such as a title or a subtitle, that is not going to change based on the user's input. Therefore, props is used for static information that is passed down from the parent and doesn't change inside the component.


**2. What is the big difference between props and state?**

The big difference between props and state is that props you pass into a component and it's handled outside of that component, while state is handled inside of a component. 

Another big difference is that when you change the state of an application, it re-renders that section of the application. While props can't actually be changed. They need to be changed outside of the component, wherever the data was stored and passed down as props.


**3. When do we re-render our application?**

The application updates and re-render when the state is modified due to something the user has done.


**4. What are some examples of things that we could store in state?**

A counter, for example, as it is originally passed down as X, but then its value either changes based on the user's input. A form would be also stored in state, as well as any input element like checkbox, select a box, and so on.
