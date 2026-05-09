import UserContext from "./context/UserContext";
import Profile from "./components/Profile";

function App() {
  const userData = {
    name: "Keerthi Kumar",
    email: "keerthi@gmail.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>User Profile App</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;