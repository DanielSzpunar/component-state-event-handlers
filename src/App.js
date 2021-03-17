import './App.css';
import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setZero = () => setCounter(0)
  return (
    <div>
    <Display counter={counter} />
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setZero}>
        zero
      </button>
    </div>
  )
}


export default App

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     console.log('clicked')
//   }
//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1 )
//   const resetCounter = () => setCounter(0)
//   console.log('rendering...', counter)
//   return (
//     <div>
//     <button onClick={increaseByOne}>+</button>
//     <button onClick={decreaseByOne}>-</button>
//     <button onClick={resetCounter}>reset</button>
//     <br />
//     {counter}
//     {/*
//     Lets put them into functions at the top of the component.
//     <button onClick={() => setCounter(counter + 1)}>
//       plus
//     </button>
//     <button onClick={() => {setCounter(counter - 1)}}>
//       minus
//     </button>
//     <button onClick={() => {setCounter(0)}}>
//       reset
//     </button>
//     */}
//     </div>
//   )
// }


// const Hello = ({ name, age }) => {
  
//   // const name = props.name
//   // const age = props.age

//   //Destructuring:
//   //const { name, age } = props
//   //We can take destructuring a step further.


//   /*Component Helper Functions:*/
//   const yearBorn = () => new Date().getFullYear() - age
  
  
//   return (
//     <div>
//       <p>{name}, you are {age} years old.</p>
//       <p>You were probably born in {yearBorn()}.</p>
//     </div>
//   )
// }

// function App() {
//   const name = 'Peter'
//   const age = 10
//   return (
//     <div>
//       <Hello name={name} age={age} />
//       <Hello name='Maya' age={1 + 3} />
//     </div>
//   );
// }

// export default App;
