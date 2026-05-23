DAY-12 — Context API (Global State Management)

Source:
React Docs
W3Schools

Topics:
- Context API
- createContext
- Provider
- useContext
- Global state
- Props drilling

==================================================

1) What Problem Does Context API Solve?

Imagine this structure:

App
↓
Parent
↓
Child
↓
GrandChild

Passing props like:

<App user={user} />
<Parent user={user} />
<Child user={user} />

This is called:

Props Drilling ❌

Problems:
- Too much prop passing
- Hard to maintain
- Repetitive code
- Difficult scaling

--------------------------------------------------

2) Solution → Context API

Context API allows sharing data globally.

Instead of:

App → Parent → Child → GrandChild

You can do:

App → Context → Any Component

Any component can access data directly.

--------------------------------------------------

3) createContext()

Create file:

UserContext.jsx

Code:

import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

Purpose:
Creates global storage.

--------------------------------------------------

4) Provider

Used inside App.jsx

Example:

<UserContext.Provider value={userData}>
   <Profile />
</UserContext.Provider>

Purpose:
Makes data available globally.

--------------------------------------------------

5) useContext()

Used to access global data.

Example:

const user = useContext(UserContext);

Now component can directly access:

user.name
user.email

--------------------------------------------------

6) Example Flow

App
↓
Provider stores data
↓
Profile consumes data
↓
No props drilling

--------------------------------------------------

7) Mini Project Example

Store globally:

- username
- email

Display in:

Profile component

No props passing needed.

--------------------------------------------------

8) Folder Structure

src/

main.jsx
App.jsx

context/
   UserContext.jsx

components/
   Profile.jsx

--------------------------------------------------

9) Real-world Usage

Amazon → cart data

Netflix → user session

Spotify → theme preferences

Authentication systems

Language settings

Dark mode themes

--------------------------------------------------

10) Common Mistakes

- Forgetting Provider
- Using useContext outside Provider
- Putting too much data in one context
- Wrong folder structure

--------------------------------------------------

11) Interview Questions

What is Context API?
- Used for global state management

-----------------------------------

What problem does it solve?
- Props drilling

-----------------------------------

What is createContext()?
- Creates global storage

-----------------------------------

What is Provider?
- Makes data available globally

-----------------------------------

What is useContext()?
- Hook to consume context data

-----------------------------------

Can Context replace Redux?
- For small/medium apps → yes
- Large apps may use Redux/Zustand

--------------------------------------------------

12) Flow Summary

createContext()
↓
Provider wraps app
↓
Components consume data
↓
No props drilling

--------------------------------------------------

Key Takeaways

Context API solves props drilling

Useful for global state

Cleaner architecture

Very common in real applications

--------------------------------------------------

Next (Day-13)

React Performance Optimization

- React.memo
- useMemo
- useCallback
