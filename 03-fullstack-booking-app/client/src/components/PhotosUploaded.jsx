import axios from "axios";
import { useState } from "react";

export default function PhotosUploaded({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState([]);

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
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
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  return (
    <div>
      {" "}
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
            <div key={link} className="flex h-32">
              <img
                className="w-full rounded-2xl object-cover"
                src={"http://localhost:4000/uploads/" + link}
                alt=""
              />
            </div>
          ))}
        <label className="flex h-32 cursor-pointer items-center rounded-2xl border bg-transparent p-8 text-center text-gray-600">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          Upload from your device
        </label>
      </div>
    </div>
  );
}
