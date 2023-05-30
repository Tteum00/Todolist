import { useEffect, useState } from "react";
import "./App.css";
import { createTodo, getTodos } from "./Api/TodosApi";
import Todo from "./components/todo"

function App() {

  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);

  // submit이 발생하였을 때
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // 초기화 되지 않게
    setTodoTitle("");
    await createTodo(todoTitle); //
    await getTodos().then((res) => setTodos(res));
  };

  // input에 입력을 하였을 때(change가 발생)
  const handleOnChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const todoComponents = [];
for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];

  todoComponents.push(
    <Todo
      todo={todo}
      setTodos={setTodos}
      todos={todos}
      key={todo.id}
    />
  );
}

  return (
    <>
      <h1 className="title">Todo!</h1>
      {/* map!!! */}
      {todoComponents}
      <form
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          value={todoTitle}
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}
export default App;
