DAY-2 — useState & Event Handling

Source:
W3Schools

Topics:
- React Hooks
- useState
- Event Handling

--------------------------------------------------

1. What is useState?

- useState is a React Hook
- It is used to manage state in a component

State = data that can change and update UI

Syntax:
const [state, setState] = useState(initialValue);

Example:
const [count, setCount] = useState(0);

- count = current value
- setCount = function to update value

--------------------------------------------------

2. How useState Works

- When state changes → component re-renders
- UI updates automatically
- React keeps track of state changes

--------------------------------------------------

3. Counter Example

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

--------------------------------------------------

4. Event Handling

Events = user actions

Examples:
- Click
- Input change
- Form submit

Syntax:
onClick={function}

Example:
<button onClick={handleClick}>Click</button>

--------------------------------------------------

5. Button Click Example

function ClickExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click</button>;
}

--------------------------------------------------

6. Arrow Function in Events

<button onClick={() => setCount(count + 1)}>
  Increase
</button>

Why?
- To execute function on click
- Prevents immediate execution

--------------------------------------------------

7. Multiple State Example

function User() {
  const [name, setName] = useState("Keerthi");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
}

--------------------------------------------------

8. Best Practice (IMPORTANT)

Use functional updates:

setCount(prev => prev + 1);

Why?
- Uses latest state
- Avoids bugs
- Preferred in real projects

--------------------------------------------------

9. Mini Project — Counter App

Features:
- Display count
- Increase (+1)
- Decrease (-1)
- Reset (0)

Improved Version:

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev + 1);
  }

  function decrease() {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

--------------------------------------------------

10. Interview Questions

What is useState?
- A React Hook used to manage state in functional components

What happens when state updates?
- Component re-renders and UI updates

Why use arrow function in onClick?
- To prevent immediate execution

What is functional update?
- Updating state using previous value (prev)

--------------------------------------------------

Key Takeaways

- useState = manage dynamic data
- State change = UI update
- Events = user interaction
- Functional updates = best practice

--------------------------------------------------

Next (Day-3)

- Input fields
- Forms
- Handling user input