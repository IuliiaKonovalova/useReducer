import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from '../components/Todo';
import ACTIONS from '../actions/TodoActions';

const TodoPage = () => {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        console.log('add');
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        console.log('toggle');
        return todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        console.log('delete');
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos;
    }
  }

  const [todo, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }



  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }


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
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })}
      </div>
    </div>
  )
}

export default TodoPage;