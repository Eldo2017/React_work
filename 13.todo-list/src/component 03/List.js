import TodoItem from './TodoItem';
import './List.css';

const List = ({todos}) => {
    return (
        <div className="List">
            <h2>To do List</h2>
            <input placeholder="검색어를 입력하시오"/>
            <div className='todos_wrap'>
                {
                    // todos.map((todo) => <TodoItem todos = {todo}/>)
                    Array.isArray(todos) && todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo}/>
                ))
                }
            </div>
        </div>
    )
}

export default List;