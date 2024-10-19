import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  let { subpage } = useParams();

  function linkClasses(type = null) {
    let classes = "px-6 py-2";
    if (subpage === type) {
      classes += " bg-primary rounded-full text-white";
    }

    return classes;
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="">
      <nav className="flex w-full items-center justify-center gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="mx-auto mt-5 max-w-lg text-center">
          Logged in as {user.name} ({user.email})
          <button onClick={logout} className="primary mt-5">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
