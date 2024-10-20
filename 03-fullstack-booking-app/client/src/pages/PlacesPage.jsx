import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  //   const [price,setPrice] = useState(100);
  //   const [redirect,setRedirect] = useState(false);

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  return (
    <div>
      {action !== "new" && (
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
      )}
      {action === "new" && (
        <div>
          <form action="" className="flex flex-col gap-3">
            <h2>Title</h2>
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="title"
            />
            <h2>Address</h2>
            <input
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="address"
            />
            <h2>Description</h2>
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder="additional info"
            ></textarea>
            <h2>Perks</h2>
            <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>Wifi</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>Free parking spot</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>Pets allowed</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>Private entrance</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>TV</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
                <input type="checkbox" />
                <span>Radio</span>
              </label>
            </div>
            <h2>Check in & Check out</h2>
            <div className="grid gap-1 sm:grid-cols-3">
              <div>
                <h3>Check in</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="12:00"
                />
              </div>
              <div>
                <h3>Check out</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  placeholder="14:00"
                />
              </div>
              <div>
                <h3>Max guest</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                  placeholder="4"
                />
              </div>
            </div>
            <h2>Extra info</h2>
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
              placeholder="house rules"
            ></textarea>
            <h2>Photos</h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
                placeholder="add using a link ....jpg"
              />
              <button
                onClick={addPhotoByLink}
                className="rounded-2xl bg-gray-200 px-6 py-2"
              >
                Add&nbsp;photo
              </button>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map((link) => (
                  <div key={link} className="h-32 flex">
                    <img
                      className="rounded-2xl w-full object-cover"
                      src={"http://localhost:4000/uploads/" + link}
                      alt=""
                    />
                  </div>
                ))}
              <label className="h-32 flex items-center cursor-pointer rounded-2xl border bg-transparent p-8 text-center text-gray-600">
                <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                Upload from your device
              </label>
            </div>
            <button className="primary">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
