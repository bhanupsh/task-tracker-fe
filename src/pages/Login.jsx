import { useState } from "react";
import Input from "../components/Input";
import { validateLogin } from "../utils/validators";
import { fetchAPI } from "../api/apiClient";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const validation = validateLogin(form);
    if (Object.keys(validation).length) {
      return setErrors(validation);
    }

    try {
      const data = await fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify(form)
      });

      localStorage.setItem("token", data.token);
      alert("Login success");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <Input label="Email" name="email" onChange={handleChange} error={errors.email}/>
      <Input label="Password" type="password" name="password" onChange={handleChange} error={errors.password}/>

      <button>Login</button>
    </form>
  );
}
