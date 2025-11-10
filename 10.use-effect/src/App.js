import { useState } from 'react';
import Views from './component/Views';
import Controller from './component/Controller';
import './App.css';

function App() {
  const [count, setCount]=useState(0);
  const [text, setText] = useState('');

  const onChangeInput = e => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  const onClickBtn = (value) => {
    setCount(count + value);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <input value={text} onChange={onChangeInput}/>
      <Views count={count}></Views>
      <Controller onClickBtn={onClickBtn}/>
    </div>
  );
}

export default App;
