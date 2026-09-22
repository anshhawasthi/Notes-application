import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function Increase(){
    setNum(num+1)
  }
  function Decrease(){
    setNum(num-1)
  }
  function Increase5(){
    setNum(num+5)
  }

  return (
    <div> 
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button className='box' onClick={Increase5}>Increase by 5</button>
    </div>
  )
}

export default App
