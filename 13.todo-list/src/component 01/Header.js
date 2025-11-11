import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1>To do-List</h1>
            <h3>{new Date().toDateString()}</h3>
        </div>
    )
}

export default Header;