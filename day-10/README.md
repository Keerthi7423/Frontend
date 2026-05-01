DAY-10 — CUSTOM HOOKS

This topic teaches how to reuse React logic.

Instead of writing the same logic again and again,
we create reusable hooks.

Example:
- Counter logic
- API fetching logic
- Form logic
- Authentication logic

Reusable hooks make code cleaner.

==================================================

1) What is a Custom Hook?

A custom hook is a reusable JavaScript function
that uses React hooks internally.

Example:

function useCounter() {
   ...
}

Important rule:
Custom hook names must start with:

use

Examples:
- useCounter
- useFetchUsers
- useForm
- useAuth

--------------------------------------------------

2) Why Custom Hooks?

Without custom hooks:

You may write same logic in multiple components.

Example:

UserPage → fetch users
Dashboard → fetch users
AdminPanel → fetch users

Same code repeated everywhere ❌

Custom hooks solve this problem.

--------------------------------------------------

3) Example: Custom Counter Hook

File:
useCounter.js

Code:

import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;

--------------------------------------------------

4) What Happens Here?

Step 1:
Creates state

count = 0

Step 2:
Creates reusable functions

- increment()
- decrement()
- reset()

Step 3:
Returns everything

Any component can use it.

--------------------------------------------------

5) Using Custom Hook in Component

File:
App.jsx

Code:

import useCounter from "./useCounter";

function App() {
  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

--------------------------------------------------

6) Flow of Counter Hook

Component loads
→ useCounter runs
→ state created
→ functions returned
→ UI uses returned values

--------------------------------------------------

7) Real Example: API Hook

File:
useFetchUsers.js

Code:

import { useState, useEffect } from "react";

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users;
}

export default useFetchUsers;

--------------------------------------------------

8) Using API Hook

import useFetchUsers from "./useFetchUsers";

function App() {
  const users = useFetchUsers();

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

--------------------------------------------------

9) Why Custom Hooks Are Powerful?

✅ Reusable logic

Write once → use anywhere

-----------------------------------

✅ Cleaner components

UI remains clean

-----------------------------------

✅ Better maintenance

Fix logic in one place

-----------------------------------

✅ Separation of concerns

Logic separate from UI

--------------------------------------------------

10) Rules of Custom Hooks

Only call hooks at top level

❌ Wrong:
if (true) {
 useState()
}

-----------------------------------

Do not call hooks inside loops

❌ Wrong:
for(...) {
 useEffect()
}

-----------------------------------

Always start custom hook names with "use"

✅ useCounter
✅ useFetchUsers

--------------------------------------------------

11) Common Mistakes

- Naming hook incorrectly
- Returning JSX from hooks
- Writing UI inside hooks
- Repeating logic unnecessarily

--------------------------------------------------

12) Interview Questions

What is a custom hook?
- Reusable function containing React logic

Why use custom hooks?
- To reuse logic and keep components clean

Why should hook names start with "use"?
- React identifies them as hooks

Can hooks return JSX?
- No

Can custom hooks use other hooks?
- Yes

--------------------------------------------------

Flow of Custom Hooks

Component loads
→ custom hook runs
→ logic executes
→ returns data/functions
→ component renders UI

--------------------------------------------------

Key Takeaways

- Custom hooks reuse logic
- Keeps code clean
- Very common in real projects
- Helps build scalable applications

--------------------------------------------------

Next (Day-11)

React Router
Multi-page applications
Navigation