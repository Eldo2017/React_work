import { useEffect, useState } from 'react';
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

  /*
  // 객체가 생성이 될 때 (mount) => 빈 배열을 넣는다
  useEffect(() => {
    console.log('mount');
  },[]);

  // 객체가 update될 때, 호출 => 배열 X
  useEffect(() => {
    console.log('update');
  })
  

  // count 값이 update될 때만 호출
  useEffect(() => {
    console.log('count update');
  }, [count])
  */
  
  // count, text 값이 update될 때만 호출
  useEffect(() => {
    console.log('count 및 text 중 어느 하나 update');
  }, [count, text])

  // unmount될 때 => return을 써라
  useEffect(()=>{
    console.log("Mount");
    return () => {
      console.log("unMount");
    }
  },[]);
  
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
