import { Button } from "react-bootstrap";

function Detail() {
    return (
        <div className="detail">
            <div className="detail_img">
                <img src={process.env.PUBLIC_URL + "/img/clothes4.jpg"} width="60%"></img>
            </div>
            <div className="detail_text">
                <h4>상품명</h4>
                <p>상품 설명</p>
                <p>32000원</p>
                <Button variant="dark">주문하기</Button>
            </div>
        </div>
    )
}

export default Detail;