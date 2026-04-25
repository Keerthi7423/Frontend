import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Invalid email");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Form submitted successfully");

    // Reset form
    setForm({ email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />

      <button disabled={!form.email || !form.password}>
        Login
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default App;