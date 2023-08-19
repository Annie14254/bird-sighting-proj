import { UserContext } from "../ctx/UserContext"
import {createContext, useContext, useState, useEffect} from "react"
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import Form from "../components/SignupForm"

const Signup = () => {
  // const {currUser} = UserContext()

  return (
    <div>
        <Form/>
    </div>
  )
}

export default Signup