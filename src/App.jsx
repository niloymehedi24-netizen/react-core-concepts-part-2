import './App.css'
import Counter from './counter'
import Batesman from './Batesman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }

const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }

function App() {

  const postsPromise = fetchPosts()
  // const friendsPromise = fetchFriends()

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

      <Suspense fallback={<h4>Posts are coming...</h4>} >
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise ={friendsPromise}></Friends>
      </Suspense> */}

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
