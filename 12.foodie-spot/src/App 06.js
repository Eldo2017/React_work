import './App.css';
import {useState} from 'react';
/*
  input에 글자 받아서 title에 추가하기
*/
function App() {
  const [like, setLike] = useState(0);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);  // '닫힘'/'열림' or  0/1 or true/false
  let [modalIndex, setModalIndex] = useState(0);
  // input에 들어온 값 저장할 state
  let [inputValue, setInputValue] = useState('');


  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal)}}>{v}</h4>
              <p>11월 10일 &emsp;<span onClick={() => {setLike(like+1)}}>🥇</span>&emsp;{like}</p>
            </div>
          )
        }) 
      }
      {/* 1. 입력받기 */}
      <input onChange={(e) => {setInputValue(e.target.value); console.log(inputValue)}}></input>
      {/* 3. 글추가 버튼 */}
      <button onClick={() => {
        let copy1 = [...title];
        let copy2 = [...like];
        copy1.unshift(inputValue);
        copy2.unshift(0);
        setTitle(copy1);
        setLike(copy2);
      }}>글추가</button>
      { modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle}/> : null }  
    </div>
  );
}


function Modal({title, modalIndex, setTitle}) {
  return (
    <div className='Modal'>
      <h4>{title[modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      <button onClick={() => {
        let copy = [...title];
        copy[modalIndex] = '김밥천국';
        setTitle(copy);
      }}>글수정</button>
    </div>
  )
}

export default App;