DAY-4 — Conditional Rendering & Lists

Source:
W3Schools

Topics:
- Conditional Rendering
- Lists
- Keys

==================================================

1. What is Conditional Rendering?

Conditional rendering means showing UI based on a condition.

Examples:
- Logged in → show dashboard
- Not logged in → show login
- No data → show message

--------------------------------------------------

2. Methods of Conditional Rendering

A) if / else

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome</h1>;
  }

  return <h1>Please Login</h1>;
}

--------------------------------------------------

B) Ternary Operator (MOST USED)

condition ? trueUI : falseUI

Example:
{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}

--------------------------------------------------

C) Logical AND (&&)

{isLoggedIn && <h1>Welcome Back</h1>}

- If true → renders
- If false → renders nothing

--------------------------------------------------

3. Lists in React

Lists are used to render multiple items dynamically.

Example:
const items = ["Apple", "Banana", "Mango"];

function App() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

--------------------------------------------------

4. What is map()?

map() is a JavaScript method used to loop through arrays
and return elements.

Example:
items.map(item => ...)

Used in React to render UI lists.

--------------------------------------------------

5. Keys in React (VERY IMPORTANT)

Keys are unique identifiers for list items.

Example:
<li key={index}>{item}</li>

Better:
<li key={user.id}>{user.name}</li>

--------------------------------------------------

6. Why Keys are Important?

- Helps React identify elements
- Improves performance
- Avoids UI bugs

--------------------------------------------------

7. Real-World Example

const users = [
  { id: 1, name: "Keerthi" },
  { id: 2, name: "John" }
];

function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        users.map(user => (
          <h3 key={user.id}>{user.name}</h3>
        ))
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

--------------------------------------------------

8. Common Mistakes

- Missing key in list
- Using index as key (not recommended)
- Wrong condition logic
- Rendering undefined or null
- Not using map() properly

--------------------------------------------------

9. Key Takeaways

- Conditional rendering controls UI
- Ternary operator is most used
- map() renders lists
- keys are required for lists
- Combine conditions + lists for real apps

--------------------------------------------------

10. Interview Questions

What is conditional rendering?
- Rendering UI based on a condition

What is the ternary operator?
- Shortcut for if-else in JSX

What is logical AND (&&)?
- Renders UI only if condition is true

What is map() in React?
- Used to render list of elements

What is key in React?
- Unique identifier for list items

Why are keys important?
- Helps React optimize rendering

Can we use index as key?
- Not recommended for dynamic lists

What happens if key is missing?
- React shows warning and may cause bugs

Difference between map() and for loop?
- map() returns JSX
- for loop does not directly render UI

--------------------------------------------------

Next (Day-5)

- useEffect
- API calls
- Real-world data handling