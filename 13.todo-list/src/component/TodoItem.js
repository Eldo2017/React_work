import './TodoItem.css';

const TodoItem = ({id, isDone, content, date}) => {
    const formattedDate = new Date(date).toLocaleDateString('ko-KR',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });

    return (
        <div className="TodoItem">
            <input type="checkbox"/>
            <div className='content'>{content}</div>
            <div className='date'>{formattedDate}</div>&emsp;
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;