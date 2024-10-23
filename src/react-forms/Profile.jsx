import { useContext } from "react"
import { AuthContext } from "./AuthContext"


const Profile = () => {
const {user} = useContext(AuthContext);

if (!user) {
  return <p>please log in</p>
}

  return (
    <div>
      {user.name}
    </div>
  )
}

export default Profile