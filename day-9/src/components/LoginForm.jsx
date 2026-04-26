import { useState, useRef, useEffect } from "react";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // ✅ Auto focus email
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // ❌ Empty email
    if (!form.email) {
      setError("Email is required");
      emailRef.current.focus();
      return;
    }

    // ❌ Invalid email
    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Invalid email");
      emailRef.current.focus();
      return;
    }

    // ❌ Empty password
    if (!form.password) {
      setError("Password is required");
      passwordRef.current.focus();
      return;
    }

    // ❌ Weak password
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      passwordRef.current.focus();
      return;
    }

    // ✅ Success
    setError("");
    alert("Login Successful");

    setForm({ email: "", password: "" });

    emailRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={emailRef}
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        ref={passwordRef}
        name="password"
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default LoginForm;