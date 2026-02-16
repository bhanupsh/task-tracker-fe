import { useState } from "react";
import Input from "../components/Input";
import { validateSignup } from "../utils/validators";
import { api } from "../api/apiClient";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const validation = validateSignup(form);
    if (Object.keys(validation).length) {
      return setErrors(validation);
    }

    try {
      await api.post("/auth/signup", form);
      alert("Signup successful");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <Input label="Name" name="name" onChange={handleChange} error={errors.name}/>
      <Input label="Email" name="email" onChange={handleChange} error={errors.email}/>
      <Input label="Password" type="password" name="password" onChange={handleChange} error={errors.password}/>

      <button>Register</button>
    </form>
  );
}
