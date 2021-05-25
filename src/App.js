import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementbyAppInput } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementbyAppInput(5))}>increment 5</button>

      {isLogged ? <h3>Valueable Info i shouldnt see</h3> : ''}
    </div>
  );
}

export default App;
