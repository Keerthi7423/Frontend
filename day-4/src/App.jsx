import { useState } from "react";

function App() {
  // Users array
  const users = [
    { id: 1, name: "Keerthi" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" }
  ];

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle function
  function toggleLogin() {
    setIsLoggedIn(prev => !prev);
  }

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* Toggle Button */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <div>
          {users.map(user => (
            <h3 key={user.id}>{user.name}</h3>
          ))}

          {/* Bonus */}
          <h4>Total Users: {users.length}</h4>
        </div>
      ) : (
        <h2>Please Login</h2>
      )}

    </div>
  );
}

export default App;