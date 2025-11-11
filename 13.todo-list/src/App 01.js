import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';
import { useState } from 'react';

const tmpData = [
  {
    id: 0,
    isDone: false,
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

  const onCreate = (content) => {
    const newItem = {
      id: 0,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos(newItem, ...todos);
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List />
    </div>
  );
}

export default App;
