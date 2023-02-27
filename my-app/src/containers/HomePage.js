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
    <div>
      <h1>Home Page</h1>
      <div 
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      >
        <Link to="/todo">Todo Page</Link>
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