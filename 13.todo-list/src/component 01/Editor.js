import { useState } from 'react';
import './Editor.css';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    return (
        <div className="Editor">
            <input onChange={(e) => {setContent(e.target.value)}} placeholder="새로운 ToDo..."/>&emsp;
            <button onClick={() => {onCreate(content)}}>추가</button>
        </div>
    )
}

export default Editor;