import './App.css'
import './todo.css'
import { Todo } from "./components/Todo"


function App() {

  return <div className='App'>
    <Todo />
  </div>
}

export default App






//===============================Call Parent to child=========================
// function App() {
//   const data = 'Hello Chandu'
//   return (
//     <div className="App">
//       <First data={data} />
//       <Second />
//     </div>
//   )
// }

// function First({ data }) {
//   console.log("Received from parent", data)
//   return <h1>FIrst Child</h1>
// }
// function Second() {
//   return <h1>Second Child</h1>
// }

//=============================Call parent from child================================

// function App() {
//   const getData = (data) => {
//     console.log("Got data from Child:", data)
//   }
//   return (
//     <div className="App">
//       <First dataFn={getData} />
//       <Second />
//     </div>
//   )
// }
// function First({ dataFn }) {
//   const data = "Hello"
//   dataFn(data)
//   return <h1>FIrst Child</h1>
// }
// function Second() {
//   return <h1>Second Child</h1>
// }


//================= Child1 to parent and parent to child2 (Sibling) ====================


// function App() {
//   const [message, setMessage] = useState(":=> Hello I am message")

//   const getData = (data) => {
//     console.log("Got data from Child:", data)
//     setMessage(data)
//   }
//   return (
//     <div className="App">
//       <First dataFn={getData} />
//       <Second message={message} />
//     </div>
//   )
// }

// function First({ dataFn }) {
//   const data = ":=> Hello From First"
//   dataFn(data)
//   return <h1>FIrst Child</h1>
// }

// function Second({ message }) {
//   console.log("Got the data from sibling", message)
//   return <h1>Second Child</h1>
// }


