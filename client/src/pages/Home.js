import { UserContext } from "../ctx/UserContext"
import {createContext, useContext, useState, useEffect} from "react"
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import "../styles/Home.css"

const Home = () => {

  return (
    <div className="master">
      <div className="hero">
        <Image src="https://via.placeholder.com/200" alt = "placeholder image" className = "hero-image"fluid />
      </div>

      <Container>
        <Row className='gy-3 card-container'>
          <Card>
          <div>
            <p>sample</p>
          </div>
          </Card>
          <Card>
          <div>
            <p>sample</p>
          </div>
          </Card>
          <Card>
          <div>
            <p>sample</p>
          </div>
          </Card>
        </Row>
      </Container>
      
    </div>
  )
}

export default Home