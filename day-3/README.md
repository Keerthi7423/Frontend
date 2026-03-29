DAY-3 — Forms, Inputs & Controlled Components

Source:
W3Schools

Topics:
- React Forms
- React Input
- React Events

==================================================

1. What is Input Handling?

Input handling means capturing user data from UI.

Examples:
- Name input
- Email input
- Password input

In React, inputs are controlled using state.

--------------------------------------------------

2. Controlled Components (VERY IMPORTANT)

A controlled component is an input controlled by React state.

Example:

import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
    </div>
  );
}

Explanation:
- value = state
- onChange = updates state
- UI always reflects state

--------------------------------------------------

3. onChange Event

Used to track input changes.

Example:
onChange={(e) => setName(e.target.value)}

Breakdown:
- e = event object
- e.target.value = current input value

--------------------------------------------------

4. Form Submission

By default, form reloads page ❌

We prevent it using:

function handleSubmit(e) {
  e.preventDefault();
}

Example:

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>

--------------------------------------------------

5. Handling Multiple Inputs (REAL WORLD)

import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
    </form>
  );
}

Key Concept:
[e.target.name]: e.target.value

- Dynamically updates any input field
- Works for multiple inputs

--------------------------------------------------

6. Common Mistakes

- Not using value
- Missing onChange
- Forgetting preventDefault()
- Using multiple <form> tags
- Uncontrolled inputs

--------------------------------------------------

7. Mini Project — Form App

Features:
- Name input
- Email input
- Show entered data
- Submit button
- Prevent page reload

--------------------------------------------------

8. Interview Questions

What is a controlled component?
- Input controlled by React state

Why use useState in forms?
- To manage user input dynamically

What does onChange do?
- Captures user input and updates state

What is e.target.value?
- Current value of the input field

Why use e.preventDefault()?
- To stop page reload on form submit

How to handle multiple inputs?
- Use one state object and update dynamically using name

What are benefits of controlled components?
- Full control over input
- Easier validation
- Better debugging

--------------------------------------------------

Key Takeaways

- React controls inputs using state
- Controlled components are important
- onChange updates state
- preventDefault stops reload
- Dynamic form handling is required

--------------------------------------------------

Next (Day-4)

- Conditional rendering
- Lists and keys
- Dynamic UI