import { useState } from "react"

//components
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"

const App = (): JSX.Element => {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-20">
        <div className="mt-12 md:flex">
          <Form 
            todos={ todos }
            setTodos={ setTodos }
          />
          <List />
        </div>
      </div>
    </div>

  )
}

export default App
