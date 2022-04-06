import React, {useState} from 'react'

// function countInitial() {
//   console.log('run functon')
//   return 4
// }
function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  

  function decrementCount() {
    setCount(prevCount => prevCount -1 )
  }

  
  function incrementCount() {
    setCount(prevCount => prevCount +1 )
    setTheme('red')
  }
  
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    
    </>
  )
}

export default App