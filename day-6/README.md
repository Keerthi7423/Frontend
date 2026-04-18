# 🚀 DAY-6 — User Explorer App (Async/Await + Clean Structure)

## 📘 Topics Covered
- async/await
- useEffect
- API fetching
- try/catch error handling
- Component structure
- Props (real usage)

---

## 🧠 1. What You Built

A **User Explorer App** that:
- Fetches users from API 🌐  
- Shows loading ⏳  
- Handles errors ❌  
- Displays user list 👤  
- Uses clean component structure  

---

## 🌐 API Used

https://jsonplaceholder.typicode.com/users

---

## 📁 Project Structure
src/
│
├── main.jsx
├── App.jsx
├── components/
│ ├── UserList.jsx
│ └── Loader.jsx

---

## ⚙️ 2. main.jsx (Entry Point)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
Explanation:
Renders the App component
No business logic here

3. App.jsx (Main Logic)
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  }

  if (loading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>User Explorer</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
Explanation:
useState → stores users, loading, error
useEffect → runs API call on load
async/await → cleaner API handling
try/catch → handles errors
Conditional rendering → loading/error/data

4. UserList.jsx (Display Users)
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;

Explanation:
Receives users via props
Uses map() to render list
Uses key for performance

5. Loader.jsx (Loading UI)
function Loader() {
  return <h2>Loading...</h2>;
}

export default Loader;
Explanation:
Simple reusable component
Keeps UI clean

6. Key Concepts
async/await
Cleaner way to handle promises
try/catch
Handles API errors safely
useEffect
Runs side effects (API calls)
Props
Pass data between components
Component Structure
Split logic into reusable parts


Common Mistakes
Using async directly in useEffect ❌
Not handling errors ❌
Not using keys in map ❌
Mixing all logic in one file ❌

Interview Questions
❓ What is async/await?

Cleaner way to handle asynchronous operations.

❓ Why use try/catch?

To handle errors in async code.

❓ Why not use async directly in useEffect?

useEffect cannot be async directly.

❓ What is useEffect used for?

Handling side effects like API calls.

❓ What are props?

Data passed between components.

❓ Why split components?

For clean, reusable, maintainable code.