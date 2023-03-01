
import React from 'react';
import ACTIONS from '../actions/TodoActions';

function TodoItem ({ todo, dispatch }) {

  function toggleTodo(e) {
    e.preventDefault();
    console.log('toggle');
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }

  function deleteTodo(e) {
    e.preventDefault();
    console.log('delete');
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  }

  return (
    <div
      key={todo.id}
      className='flex flex-row space-x-2 justify-center items-center bg-slate-800 mt-2 p-3'
      >
      <span
        style={{ color: todo.complete ? '#00FF00' : '#FF0000' }}
      >
        {todo.name}
      </span>
      <div className='flex flex-row justify-center items-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={toggleTodo}>Toggle</button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={deleteTodo}>Delete</button>
        </div>
    </div>

  )
}

export default TodoItem;