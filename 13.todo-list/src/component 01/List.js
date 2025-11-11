import TodoItem from './TodoItem';
import './List.css';

const List = () => {
    return (
        <div className="List">
            <h4>To do List</h4>
            <input placeholder="검색어를 입력하시오"/>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default List;