import { UserContext } from "../ctx/UserContext"

const Home = () => {
  const {currUser} = UserContext()

  return (
    <div>
        Homepage
    </div>
  )
}

export default Home