import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes = "px-6 py-2";
    if (type === subpage) {
      classes += " bg-primary rounded-full text-white";
    }

    return classes;
  }
  return (
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
  );
}
