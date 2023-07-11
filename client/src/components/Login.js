import { UserContext } from "../ctx/UserContext"

const Login = () => {
  const {currUser} = UserContext()

  return (
    <div>
        Login
    </div>
  )
}

export default Login