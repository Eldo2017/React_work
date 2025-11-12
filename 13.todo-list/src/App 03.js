import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';
import { useRef, useState } from 'react';

const tmpData = [
  {
    id: 0,
    isDone: false, // 체크박스
    content: "React 공부",
    date: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "사법고시",
    date: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "일본어 회화",
    date: new Date().getTime(),
  },

  {
    id: 3,
    isDone: false,
    content: "K-POP 댄스 연습",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(tmpData);

  // 현재 id를 기존 데이터의 id 번호 다음 번호로 setting

  /* 
    useRef() : React Hook 중 하나, 컴포넌트가 재렌더링되도 값이 유지되는 역할을 한다
  */

  const idRef = useRef(4); // id가 0~3번까지 있으므로 4번부터 시작
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newItem, ...todos]);
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;
