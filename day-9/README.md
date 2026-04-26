DAY-9 — useRef & DOM Manipulation (Smart Login Form)

Source:
W3Schools

Topics:
- useRef
- DOM access
- Focus handling
- UX improvements
- Controlled components + refs

==================================================

1. What is useRef?

useRef is a React Hook used to:

- Access DOM elements directly
- Store values without causing re-render

Example:
const inputRef = useRef(null);

--------------------------------------------------

2. Why use useRef?

Used for:
- Focusing input fields
- Scrolling
- Accessing DOM values
- Improving user experience

--------------------------------------------------

3. useRef vs useState

useState:
- Causes re-render
- Used for UI state

useRef:
- Does NOT cause re-render
- Used for DOM or value storage

--------------------------------------------------

4. Auto Focus Example

useEffect(() => {
  emailRef.current.focus();
}, []);

Explanation:
- Runs once when component loads
- Focuses email input automatically

--------------------------------------------------

5. Smart Login Form (Core Logic)

States:
- form (email, password)
- error

Refs:
- emailRef
- passwordRef

--------------------------------------------------

6. Validation + Focus Logic

if (!form.email) {
  setError("Email is required");
  emailRef.current.focus();
  return;
}

if (!form.email.includes("@") || !form.email.includes(".")) {
  setError("Invalid email");
  emailRef.current.focus();
  return;
}

if (!form.password) {
  setError("Password is required");
  passwordRef.current.focus();
  return;
}

if (form.password.length < 6) {
  setError("Password must be at least 6 characters");
  passwordRef.current.focus();
  return;
}

--------------------------------------------------

7. Success Flow

setError("");
alert("Login Successful");

setForm({
  email: "",
  password: ""
});

emailRef.current.focus();

--------------------------------------------------

8. Key Concepts

useRef:
- Access DOM using ref.current

Focus Handling:
- Improves UX
- Used in real applications

Controlled Form + Ref:
- State handles data
- Ref handles DOM

--------------------------------------------------

9. Common Mistakes

- Not attaching ref to input
- Forgetting .current
- Expecting re-render from useRef
- Using useRef instead of useState for UI

--------------------------------------------------

10. Interview Questions

What is useRef?
- Hook used to access DOM or store values

Does useRef cause re-render?
- No

Difference between useRef and useState?
- useState re-renders
- useRef does not

How to focus input in React?
- Using useRef + .focus()

What is ref.current?
- Reference to DOM element

--------------------------------------------------

Key Takeaways

- useRef is for DOM access
- Does not trigger re-render
- Used for focus and UX
- Important for real-world apps

--------------------------------------------------

Next (Day-10)

- Custom Hooks
- Reusable logic
- Advanced React patterns