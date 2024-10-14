import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault()
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can log in");
    } catch (e) {
      alert(`Registration failed. Please try again later: ${e}`);
    }
  }

  return (
    <div className="flex grow items-center justify-center">
      <div className="mb-64">
        <h1 className="mb-4 text-center text-4xl">Register</h1>
        <form action="" className="mx-auto max-w-md" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="pt-2 text-center text-gray-500">
            Already registered?{" "}
            <Link to={"/login"} className="text-primary">
              Login
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
