import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../feature/todo/todoSlice"

const Addtodo = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <div className="todo-app-container">
      <form
        className="todo-form"
        onSubmit={e => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter todo..."
        />
        <button className="todo-btn" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Addtodo