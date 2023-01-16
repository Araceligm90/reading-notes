const myArray = ['hello', 'how', 'are', 'you'];
const myArray2 = ['thank', 'you', 'very', 'well'];

const resultArray = [...myArray,...myArray2]

console.log(...resultArray);



const myFruits = ['watermelon', 'strawberries', 'blueberries']
const myNewFruits = ['banana', 'peach', ...myFruits];

console.log(myNewFruits);


const myObject = {name: 'Araceli'}
const myObject2 = {age: 32}
const myObject3 = {...myObject, ...myObject2, pets: 1}

console.log(myObject3);