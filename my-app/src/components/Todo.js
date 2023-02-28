
import React from 'react';
import ACTIONS from '../actions/TodoActions';

function TodoItem ({ todo, dispatch }) {

  function toggleTodo(e) {
    e.preventDefault();
    console.log('toggle');
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }
  return (
    <div key={todo.id}>
      <span
        style={{ color: todo.complete ? '#00FF00' : '#FF0000' }}
      >
        {todo.name}
      </span>
      <button
        onClick={toggleTodo}
      >
        Toggle
      </button>

    </div>
    // <></>
  )
}

export default TodoItem;