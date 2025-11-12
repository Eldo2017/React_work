import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  const [clothes, setClothes] = useState(pList);
  const navigate = useNavigate();
  // useNavigate() : 페이지 이동을 도와주는 함수
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
        {/* 
          1. url 파라미터 사용하기
          localhost:3000/detail/1 -> 받을 때는 useParams() : 주고 고정적인 것 사용시

          localhost:3000/detail?id=6 -> 받을 때는 useSearchParams() : 변하는 값 사용시
          let [params, SetParams] = useSearchParams();
          params.get('search') 

          <Route path="/detail/:search" element={<Detail clothes={clothes}/>}/>
        */}
        <Route path="/detail/:pid" element={<Detail clothes={clothes}/>}/>
        
        {/* 값을 여러 개 넘겨줄 때 */}
        {/* <Route path="/detail/:pid/:member" element={<Detail clothes={clothes}/>}/> */}

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
