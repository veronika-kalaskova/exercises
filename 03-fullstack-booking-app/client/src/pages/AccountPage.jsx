import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  let { subpage } = useParams();

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
      <AccountNav />
      {subpage === "profile" && (
        <div className="mx-auto mt-5 max-w-lg text-center">
          Logged in as {user.name} ({user.email})
          <button onClick={logout} className="primary mt-5">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
