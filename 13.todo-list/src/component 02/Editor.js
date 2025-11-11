import { useRef, useState } from 'react';
import './Editor.css';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();
    return (
        <div className="Editor">
            <input value={content} ref={contentRef} onChange={(e) => {setContent(e.target.value)}} placeholder="새로운 ToDo..."/>&emsp;
            <button onClick={() => {
                if(content === "") {
                    contentRef.current.focus();
                    return;
                }

                onCreate(content);
                setContent('');
            }}>추가</button>
        </div>
    )
}

export default Editor;