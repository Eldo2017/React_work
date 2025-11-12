import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';

// ajax 사용하기
function App() {
  const [clothes, setClothes] = useState(pList);
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로 이동</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로 이동</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' />
            <Container>
              <Row>
                {
                  clothes.map((item, i) => {
                    return(
                      <PListCol clothes={item} key={i}/>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        
        <Route path="/detail/:pid" element={<Detail clothes={clothes}/>}/>
        <Route path="/cart" element={<div>장바구니임</div>}/>
        <Route path="*" element={<div>없는 페이지니 돌아가기 바람</div>}/>
      </Routes>
    </div>
  );
}

function PListCol(props) {
  return (
    <>
      <Col>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.clothes.id}.jpg`} width="100%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}
export default App;
