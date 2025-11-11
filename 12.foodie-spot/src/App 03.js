import { useState } from 'react';
import './App.css';

/*
  - 글 목록 줄이는 방법
  1. 반복문으로 만들기
  2. 별도의 component로 만들기
*/

function App() {
  // 제목들을 배열 상태로 관리하기
  let [title, setTitle] = useState(["김밥천국","진국","취향","명륜진사갈비"]);
  let [like, setLike] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false); // '닫힘' / '열림', 0 / 1, true / false
  let [selected, setSelected] = useState(null);

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

  // h4 클릭 시 한번에 처리하기
  const handleClick = (index) => {
    setSelected(index); // 클릭한 항목을 기억
    setModal(!modal) // 모달 열고 닫기
    changeTitle(index); // 제목 즉시 변경
  };

  // 글목록을 반복문으로 줄이기
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      {title.map((t,i) => (
        <div className='list' key={i}>
          <h4 onClick={() => handleClick(i)} style={{cursor:"pointer"}}>{t}</h4>
          <p>
            11월 {10 + i}일
            <span onClick={() => upLike(i)} style={{cursor:"pointer"}}>
              🏆️
            </span> {like[i]}
          </p>
        </div>
      ))}

      { modal ? <Modal title={title[selected]} onClose={() => setModal(!modal)}/> : null }
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
