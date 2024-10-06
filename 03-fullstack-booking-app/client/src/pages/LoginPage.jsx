import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center grow">
      <div className="mb-64">
        <h1 className="mb-4 text-center text-4xl">Login</h1>
        <form action="" className="mx-auto max-w-md">
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center pt-2 text-gray-500">Don&apos;t have an account? <Link to={'/register'} className="text-primary">Register now.</Link> </div>
        </form>
      </div>
    </div>
  );
}
