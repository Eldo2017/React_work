import { Button, Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

/*
    배열로 정보를 보여주면 삭제 시 다른 정보를 보여줄 수 있다.
    id를 찾아 그 접오를 보여주는 것이 오류를 줄일 수도 있다.
*/
function Detail(props) {
    /*
    let {pid, member} = useParams();

    console.log(`pid: ${pid}`);
    console.log(`member: ${member}`);
    console.log(typeof(pid));
    */
   
    let {pid} = useParams();

    return (
        <div className="detail">
            <Container>
                <Row>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${pid}.jpg`} width="80%"/>
                    </Col>
                    <Col>
                        <h4>{props.clothes[pid-1].title}</h4>
                        <p>{props.clothes[pid-1].content}</p>
                        <p>{props.clothes[pid-1].price}원</p>
                        <Button variant="dark">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail;