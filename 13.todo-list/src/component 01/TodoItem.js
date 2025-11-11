import './TodoItem.css';

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox"/>
            <div>ToDo...</div>
            <div>Date</div>&emsp;
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;