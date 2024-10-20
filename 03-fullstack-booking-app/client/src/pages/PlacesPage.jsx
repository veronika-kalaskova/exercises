import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";

export default function PlacesPage() {
  return (
    <div>
      <AccountNav />

      <div className="mt-5 text-center">
        <Link
          to={"/account/places/new"}
          className="inline-flex rounded-full bg-primary px-6 py-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
    </div>
  );
}
