import React from 'react'
import { styled } from 'styled-components'

function CeditCard() {
  return (
    <Container>
 <div className="container">
        <div className="card">
            <div className="card-inner">
                <div className="front">
                    <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"/>
                    <div className="row">
                        <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px"/>
                        <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px"/>
                    </div>
                    <div className="row card-no">
                        <p>5244</p>
                        <p>2150</p>
                        <p>8252</p>
                        <p>6420</p>
                    </div>
                    <div className="row card-holder">
                        <p>CARD HPLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div className="row name">
                        <p>JOE ALISON</p>
                        <p>10 / 25</p>
                    </div>
                </div>
                <div className="back">
                    <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"/>
                    <div className="bar"></div>
                    <div className="row card-cvv">
                        <div>
                            <img src="https://i.ibb.co/S6JG8px/pattern.png"/>
                        </div>
                        <p>824</p>
                    </div>
                    <div className="row card-text">
                        <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
                    </div>
                    <div className="row signature">
                        <p>CUSTOMER SIGNATURE</p>
                        <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Container>
  )
}


const Container = styled.div`


.card {
    width: 500px;
    height: 200px;
    color: #fff;
    cursor: pointer;
    perspective: 1000px;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.front, .back {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #0045c7, #ff2c7d);
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 30px;
    border-radius: 15px;
    overflow: hidden;
    z-index: 1;
    backface-visibility: hidden;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.map-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
}

.card-no {
    font-size: 35px;
    margin-top: 60px;
}

.card-holder {
    font-size: 12px;
    margin-top: 40px;
}

.name {
    font-size: 22px;
    margin-top: 20px;
}

.bar {
    background: #222;
    margin-left: -30px;
    margin-right: -30px;
    height: 60px;
    margin-top: 10px;
}

.card-cvv {
    margin-top: 20px;
}

.card-cvv div {
    flex: 1;
}

.card-cvv img {
    width: 100%;
    display: block;
    line-height: 0;
}

.card-cvv p {
    background: #fff;
    color: #000;
    font-size: 22px;
    padding: 10px 20px;
}

.card-text {
    margin-top: 30px;
    font-size: 14px;
}

.signature {
    margin-top: 30px;
}

.back {
    transform: rotateY(180deg);
}

.card:hover .card-inner {
    transform: rotateY(-180deg);
}
`;

export default CeditCard