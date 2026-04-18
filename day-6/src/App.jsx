import { useState, useEffect } from "react";
import UserList from "./UserList";
import Loader from "./Loader";

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