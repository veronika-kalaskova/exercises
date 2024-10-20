import { useState } from "react";
import axios from "axios";
import Perks from "../components/Perks";
import PhotosUploaded from "../components/PhotosUploaded";
import AccountNav from "../components/AccountNav";
import { Navigate } from "react-router-dom";

export default function PlacesFormPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  //   const [price,setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  async function addNewPlace(ev) {
    ev.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace} className="flex flex-col gap-3">
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
        <Perks selected={perks} onChange={setPerks} />
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
        <PhotosUploaded addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <button className="primary">Save</button>
      </form>
    </div>
  );
}
