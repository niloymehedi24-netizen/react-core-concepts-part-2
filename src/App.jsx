import './App.css'
import Counter from './counter'
import Batesman from './Batesman'



function App() {

  // function handleClick(){
  //   alert('I am clicked')
  // }

  const handleClick = () =>{
    alert('Click me 2 button was clicked')
  }

  const pushMe = (num) =>{
    const newNum = num + 7
    alert(newNum)
  }

  return (
    <>
      <h3>Get started</h3>
      <Counter></Counter>
      <Batesman></Batesman>
      
      {/* <button>Click me</button> */}
      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClick}>Click me 2</button>

      <button onClick={() => pushMe(10)}>Push me</button>
    </>
  )
}

export default App
