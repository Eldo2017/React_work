import { useEffect, useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
    let {pid} = useParams();

    let findId = props.clothes.find(item => 
        item.id == pid
    )

    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {setAlert(false)}, 3000);
        return() => {
            clearTimeout(timer);
        }
    },[])

    return (
        <div className="detail">
            {alert && (
                <div className="alert-box text-center">
                    3초 이내 구매 시 할인
                </div>
            )}
            <Container>
                <Row>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id}.jpg`} width="100%"/>
                    </Col>
                    <Col>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="dark">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail;