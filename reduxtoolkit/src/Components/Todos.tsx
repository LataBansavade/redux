import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../feature/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state: any) => state.todos)
  const dispatch = useDispatch()
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo: any) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id: string) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todo-list">
      <h1>Todos</h1>
      {todos.map((todo: any) => (
        <div className="todo-item" key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                className="todo-input"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                autoFocus
              />
              <div className="todo-actions">
                <button className="todo-btn" onClick={() => handleUpdate(todo.id)}>Save</button>
                <button className="todo-btn todo-btn-remove" onClick={handleCancel}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <span className="todo-text">{todo.text}</span>
              <div className="todo-actions">
                <button className="todo-btn todo-btn-edit" onClick={() => handleEdit(todo)}>Edit</button>
                <button className="todo-btn todo-btn-remove" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todos