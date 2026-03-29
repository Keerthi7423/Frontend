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

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <button type="submit">Submit</button>

      {/* Show Data */}
      <h3>Name: {form.name}</h3>
      <h3>Email: {form.email}</h3>
    </form>
  );
}

export default Form;