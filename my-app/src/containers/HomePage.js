import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

  const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [ state, dispatch ] = useReducer(reducer, { count: 0 });


  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  return (
    <div
      className='flex flex-col justify-center items-center bg-slate-300 h-screen'
    >
      <h1>Home Page</h1>
      <div
        className='flex flex-col justify-center items-center'
      >
        <Link
          className='text-white hover:text-blue-400 p-2 rounded'
          to="/todo">
            Go to Todo Page
        </Link>
        <div>
          <button onClick={decrement}>-</button>
            <span>{state.count}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;