import { useState } from "react"

//components
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import { TodoProps } from "./interfaces/interfaces"

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<TodoProps>>([])
  
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-20">
        <div className="mt-12 md:flex">
          <Form 
            todos={ todos }
            setTodos={ setTodos }
          />
          <List
            todos={ todos }
          />
        </div>
      </div>
    </div>

  )
}

export default App
