import { useState } from 'react';
import './App.css';

/* 
  - 동적 모달창
  1. UI 디자인
  2. UI의 현재 상태 즉, state 저장하기
  3. state에 따라 UI를 어떻게 보이게 할지 조건문 등으로 작성하기
*/

function App() {
  // 제목들을 배열 상태로 관리하기
  let [title, setTitle] = useState(["김밥천국","진국","취향","명륜진사갈비"]);
  let [like, setLike] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false); // '닫힘' / '열림', 0 / 1, true / false
  
  // 제목 바꾸기 함수
  const changeTitle = (index) => {
    // 제목 배열을 복사
    let newTitle = [...title];
    if(index === 0) newTitle[0]="만족일식";
    else if(index === 1) newTitle[1]="이문설농탕";
    else if(index === 2) newTitle[2]="청년다방";
    else if(index === 3) newTitle[3]="이차돌 고기집";
    setTitle(newTitle);
  }

  // 좋아요 상승 함수
  const upLike=(index)=>{
    let newLike = [...like];
    newLike[index] += 1;
    setLike(newLike);
  };

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      <div className='list'>
        <h4 onClick={() => setModal(!modal)} style={{cursor: "pointer"}}>
          {title[0]}
          </h4> {/* 아래를 클릭하면 제목을 바꾸고 싶다 ex) 김밥천국 -> 만족일식*/}
        <p>11월 10일 <span onClick={() => upLike(0)}>🏆️</span> {like[0]} </p>
      </div>

      <div className='list'>
        <h4 onClick={() => changeTitle(1)} style={{cursor: "pointer"}}>{title[1]}</h4>
        <p>07월 28일 <span onClick={() => upLike(1)}>🏆️</span> {like[1]} </p>
      </div>

      <div className='list'>
        <h4 onClick={() => changeTitle(2)} style={{cursor: "pointer"}}>{title[2]}</h4>
        <p>04월 27일 <span onClick={() => upLike(2)}>🏆️</span> {like[2]} </p>
      </div>
      
      <div className='list'>
        <h4 onClick={() => changeTitle(3)} style={{cursor: "pointer"}}>{title[3]}</h4>
        <p>12월 02일 <span onClick={() => upLike(3)}>🏆️</span> {like[3]} </p>
      </div>

      { modal ? <Modal/> : null }
    </div>
  );
}

function Modal() {
  return (
    <div className='Modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
