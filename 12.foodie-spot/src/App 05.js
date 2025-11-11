import './App.css';
import {useState} from 'react';
/*
  버튼을 모달창에서 사용할 수 있도록 하기
*/
function App() {
  const [like, setLike] = useState(0);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);  // '닫힘'/'열림' or  0/1 or true/false

  let [modalIndex] = useState(0);


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