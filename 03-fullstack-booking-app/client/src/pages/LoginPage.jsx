import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmitLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
      setRedirect(true);
    } catch (e) {
      alert("Login failed " + e);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex grow items-center justify-center">
      <div className="mb-64">
        <h1 className="mb-4 text-center text-4xl">Login</h1>
        <form
          action=""
          className="mx-auto max-w-md"
          onSubmit={handleSubmitLogin}
        >
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
          <button className="primary">Login</button>
          <div className="pt-2 text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="text-primary">
              Register now.
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
