
import { useAuth } from "./AuthContext";


const Profile = () => {
const {user} = useAuth();

// if (!user) {
//   return <p>please log in</p>
// }

  return (
    <div>
      {user.message}
    </div>
  )
}

export default Profile