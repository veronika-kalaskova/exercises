import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="mb-64">
        <h1 className="mb-4 text-center text-4xl">Register</h1>
        <form action="" className="mx-auto max-w-md">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="password" />
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
