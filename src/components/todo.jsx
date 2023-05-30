
import { deleteTodos, getTodos, updateDone } from "../Api/TodosApi"

/* eslint-disable react/prop-types */
export default function Todo({ todo, setTodos, todos }) {
  
  // 체크박스에 change가 발생하였을 때
  const handleCheckbox = async (event) => {
    await updateDone(todo.id, todo.title, event.target.checked); //검색
    await getTodos().then((res) => setTodos(res));
  };

  //   삭제버튼을 click이 발생하였을 때
  const handleDelete = async () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    await deleteTodos(todo.id); // 검색!
    // await getTodos().then((res) => setTodos(res));
  };

  return (
    <div>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.done}
        onChange={handleCheckbox}
      />

        <span>{todo.title}</span>

      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}
