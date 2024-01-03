
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([])
  let [name, setName] = useState('')
  let [description, setDescription] = useState("")
  let [editContainer, SetEditContainer] = useState(false)

  async function getTodos() {
    const data = await axios.get("http://localhost:3002/todos");
    const todo = data.data.todos;
    setTodos(todo)
  }

  useEffect(() => {
    getTodos()
  }, [])


  async function handleOnAddButton() {
    try {
      await axios.post("http://localhost:3002/addtodo", { name, description })
      await getTodos();
      setModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3002/deleteTodo/${id}`)
      getTodos()

    } catch (error) {
      console.log(error)
    }
  }

  let [data, setData] = useState();

  async function onEditHandler(todo) {
    SetEditContainer(true);
    setData(todo);
  }

  async function handleOnUpdateButton() {
    const id = data._id;

    try {
      await axios.put("http://localhost:3002/editTodo", { id, name, description })
      getTodos()
      SetEditContainer(false);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Todo App</h2>
        </div>


        <button style={{ width: "100px" }} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80' onClick={() => setModalOpen(true)}>Add</button>


        <div className="px-4 py-6 sm:grid  sm:gap-4 sm:px-0">

          {todos.length != 0 ? (
            todos.map(todo => (
              <div key={todo._id} className='list'>
                <dt className="text-sm font-medium leading-6 text-gray-900" style={{ display: "inline-block" }}>{todo.name}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" style={{ display: "inline-block", marginLeft: "60px" }}>{todo.description}</dd>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{ margin: "20px" }} onClick={() => onEditHandler(todo)}>Edit</button>

                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-900" style={{ margin: "20px" }} onClick={() => handleDelete(todo._id)}>Delete</button>



              </div>))
          ) : <p>No data</p>

          }


        </div>




        {isModalOpen && (
          <div className="overlay" >

            <div className="modal">
              <button style={{ float: "right" }} onClick={() => setModalOpen(false)}>Close</button>

              <form className="max-w-sm mx-auto">

                <div>
                  <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-6">
                  <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>

                  <input type="date" id="large-input" className="description block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ margin: "20px,0px" }} onClick={() => handleOnAddButton()}>Add</button>

              </form>

            </div>
          </div>
        )}



        {editContainer && (<div className="overlay" >

          <div className="modal">
            <button style={{ float: "right" }} onClick={() => SetEditContainer(false)}>Close</button>

            <form className="max-w-sm mx-auto">
              {console.log(data)}
              <div>
                <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => (setName(""), setName(e.target.value))} placeholder={data.name} />
              </div>
              <div className="mb-6">
                <label for="large-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" id="large-input" className=" description block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => (setDescription(""), setDescription(e.target.value))} placeholder={data.description} />
              </div>
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleOnUpdateButton()}>Update</button>

            </form>

          </div>
        </div>)}

      </div>

    </>
  )
}

export default App
