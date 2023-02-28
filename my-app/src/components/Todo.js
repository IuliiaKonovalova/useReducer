
function TodoItem ({ todo }) {
  console.log(todo);
  return (
    <div key={todo.id}>
      <span
        style={{ color: todo.complete ? '#00FF00' : '#FF0000' }}
      >
        {todo.name}
      </span>

    </div>
    // <></>
  )
}

export default TodoItem;