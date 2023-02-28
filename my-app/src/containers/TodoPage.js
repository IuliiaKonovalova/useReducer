import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from '../components/Todo';

const TodoPage = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
  }

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];

      case ACTIONS.TOGGLE_TODO:
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }



  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  // console.log(todo);

  return (
    <div>
      <h1>Todo Page</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Enter name'
          value={name}
          onChange={e => setName(e.target.value)}/>
      </form>
      <div>
        {todo.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    </div>
  )
}

export default TodoPage;