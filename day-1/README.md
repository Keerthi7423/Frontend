DAY-1 — React Core Basics

Source:
Learn from W3Schools

Read:
- React Intro
- JSX
- Components
- Props

--------------------------------------------------

1. What is React?

- React is a JavaScript library for building UI
- Created by Meta
- Used for Single Page Applications (SPA)

Key Points:
- Component-based
- Reusable code
- Fast (Virtual DOM)

--------------------------------------------------

2. Setup (Vite)

npm create vite@latest my-app
cd my-app
npm install
npm run dev

--------------------------------------------------

3. JSX (JavaScript XML)

JSX = HTML inside JavaScript

Example:
const element = <h1>Hello Keerthi</h1>;

Rules:
- Only ONE parent element
- Use className instead of class
- Use {} for JavaScript expressions

Example:
const name = "Keerthi";
<h1>Hello {name}</h1>

--------------------------------------------------

4. Components

Components are reusable UI blocks

Example:
function Welcome() {
  return <h1>Hello World</h1>;
}

Usage:
<Welcome />

--------------------------------------------------

5. Props (Passing Data)

Props = data passed to components

Example:
function User({ name }) {
  return <h1>Hello {name}</h1>;
}

Usage:
<User name="Keerthi" />

--------------------------------------------------

6. Reusable Component Example

function Card({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

Usage:
<Card name="Keerthi" role="Developer" />
<Card name="John" role="Designer" />

--------------------------------------------------

7. Practice Done

- Created React app
- Created component
- Passed props
- Displayed dynamic data

Example:
function Keerthi({ name }) {
  return <h4>My name is {name}</h4>;
}

Usage:
<Keerthi name="Keerthi Kumar" />
<Keerthi name="Frontend Dev" />
<Keerthi name="React Learner" />

--------------------------------------------------

Interview Questions

What is JSX?
JSX allows writing HTML inside JavaScript.

What are components?
Reusable UI building blocks.

What are props?
Inputs passed to components.

--------------------------------------------------

Key Takeaways

- React = Components
- JSX = HTML in JS
- Props = Data passing

--------------------------------------------------

Next (Day-2)

- useState
- Event handling
- Button interaction

--------------------------------------------------

Pro Tip

Don’t just read — write code while learning.