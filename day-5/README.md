DAY-5 — useEffect & API Calls (Notes + Review)

Source:
W3Schools

Topics:
- useEffect
- API Fetching
- Loading & Error Handling

==================================================

1. What is useEffect?

- useEffect is a React Hook used for side effects.

Side effects include:
- API calls
- Fetching data
- Timers
- DOM updates

--------------------------------------------------

2. Syntax

useEffect(() => {
  // code
}, []);

--------------------------------------------------

3. Dependency Array

[] → runs only once (on component mount)

[count] → runs when count changes

(no array) → runs on every render (not recommended)

--------------------------------------------------

4. API Fetching (REAL WORLD)

Example:

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

--------------------------------------------------

5. Loading State (IMPORTANT)

const [loading, setLoading] = useState(true);

if (loading) return <h2>Loading...</h2>;

--------------------------------------------------

6. Error Handling (IMPORTANT)

const [error, setError] = useState(null);

.catch(() => {
  setError("Failed to fetch data");
  setLoading(false);
});

if (error) return <h2>{error}</h2>;

--------------------------------------------------

7. Full Flow

1. Component loads
2. useEffect runs
3. API call happens
4. Data received
5. setState updates
6. UI re-renders

--------------------------------------------------

8. Best Practices

- Always use dependency array []
- Always handle loading state
- Always handle errors
- Use unique key in map()
- Keep code clean and readable

--------------------------------------------------

9. Common Mistakes

- Missing dependency array
- Infinite loop in useEffect
- Not setting loading false
- No error handling
- Missing key in map()

--------------------------------------------------

10. Your Code Review (IMPORTANT)

Your code had:

✔ Correct structure
✔ Correct useState setup
✔ Correct useEffect placement

BUT:

❌ No API call inside useEffect
❌ No setUsers(data)
❌ No setLoading(false)
❌ No error handling
❌ No map() rendering

--------------------------------------------------

11. Fixed Version Summary

useEffect(() => {
  fetch("API")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(() => {
      setError("Error");
      setLoading(false);
    });
}, []);

--------------------------------------------------

12. Interview Questions

What is useEffect?
- Hook used for side effects in React

When does useEffect run?
- Based on dependency array

What is dependency array?
- Controls when useEffect runs

Why use useEffect for API calls?
- To fetch data when component loads

What happens if no dependency array?
- Runs on every render

How to handle loading in React?
- Use loading state

How to handle errors?
- Use error state

What is cleanup function?
- Function returned inside useEffect for cleanup

--------------------------------------------------

Key Takeaways

- useEffect handles side effects
- API calls happen inside useEffect
- Dependency array controls execution
- Always handle loading and error
- UI updates when state changes

--------------------------------------------------

Next (Day-6)

- async/await
- clean API handling
- better code structure