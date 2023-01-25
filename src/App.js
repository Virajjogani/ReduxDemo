import { useDispatch, useSelector } from 'react-redux';
import { DecNumber, IncNumber } from './actions';
import './App.css';

function App() {  

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className='main'>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className='quantity'>
          <button className='quantity_minus' title='Decrement' onClick={() => dispatch(DecNumber
            ())}><span>-</span></button>
          <input type="text" name='quantity' className='quantity_input' value={myState} />
          <button className='quantity_minus' title='Increment' onClick={() => dispatch(IncNumber
            ())}><span>+</span></button>

        </div>
      </div>
    </div>
  );
}

export default App;
