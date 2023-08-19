import { UserContext } from "../ctx/UserContext"
import {createContext, useContext, useState, useEffect} from "react";
import { Container, Image, Card, Row, Col } from 'react-bootstrap'
import "../styles/Home.css"

const Home = () => {

  return (
    <div className="master">
      <div className="hero">
        <Image src="https://via.placeholder.com/200" alt = "placeholder image" className = "hero-image"fluid />
      </div>

      <Container>
        <Row className='gy-3 card-container'>
          <Col>
            <Card className='card'>
            <div>
              <p>sample1</p>
            </div>
            </Card>
            <Card className='card'>
            <div>
              <p>sample2</p>
            </div>
            </Card>
            <Card className='card'>
            <div>
              <p>sample3</p>
            </div>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Home