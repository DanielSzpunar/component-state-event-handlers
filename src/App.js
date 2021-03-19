import "./App.css"
import React, { useState } from "react"
//Learning & Understanding Hooks

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing buttons.
      </div>
    )
  } return (
    <div>
      button press history: {props.allClicks.join( ' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [sumOfClicks, setSum] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setSum(sumOfClicks + 1)
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setSum(sumOfClicks + 1)
    setRight(right + 1)
  }
  
  const Button = ({text, handleClick}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }
  return (
    <div>
    {left}
    <Button text='left' handleClick={handleLeftClick} />
    <Button text='right' handleClick={handleRightClick} />
    {right}
      {/* {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right} */}
      <History allClicks={allClicks} />
      <p>Sum Of Clicks: {sumOfClicks}</p>
    </div>
  )
}

export default App
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left:0,
//     right: 0,
//   })
//   const handleLeftClick = () => {
//     const newClicks = {
//       ...clicks,
//       left: clicks.left + 1,
//       //right: clicks.right
//     }
//     setClicks(newClicks)
//   }
//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       //left: clicks.left,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }
//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {clicks.right}
//     </div>
//   )
// }

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

//Simple Single Hooks Option
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button text="+" handleClick={increaseByOne} />
//       <Button text="-" handleClick={decreaseByOne} />
//       <Button text="reset" handleClick={setZero} />
//       {/* <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setZero}>
//         zero
//       </button>
//       <button onClick={decreaseByOne}>
//         decrease
//       </button> */}
//     </div>
//   )
// }

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
