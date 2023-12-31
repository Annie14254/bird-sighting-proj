import { UserContext } from "../ctx/UserContext"
import {createContext, useContext, useState, useEffect} from "react"
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import Form from "../components/LoginForm"

const Login = () => {
  // const {currUser, logout} = UserContext()
  const defForm = { email: "", password: "" }
  const [ formData, setFormData ] = useState(defForm)
  const [ loginResult, setLoginResult ] = useState("")

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const query = await fetch("/api/user/auth", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await query.json()

    if( result && result.payload ){
      window.location.href = "/"
    } else {
      setLoginResult("fail")
    }
  }

  return (
    <div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Login