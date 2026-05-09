import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>

      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default Profile;