import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useSelector used for getting the state values from the redux store
  const counter = useSelector(state => state.counter);

  // useDispatch return a function which acts as reducer function(changing state values inside the redux store)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type: "increment"});
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  }

  const incrementBy5Handler = () => {
    dispatch({type: "INCREMENTBY2"});
    dispatch({type: "INCREMENTBY2"});
    dispatch({type: "increment"});
  }

  const decrementBy5Handler = () => {
    dispatch({type: "DECREMENTBY2"});
    dispatch({type: "DECREMENTBY2"});
    dispatch({type: "decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
