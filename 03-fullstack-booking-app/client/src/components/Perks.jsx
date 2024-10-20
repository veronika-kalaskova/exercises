export default function Perks({ selected, onChange }) {
  function handleCheckboxClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }

  return (
    <div>
      {" "}
      <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input type="checkbox" name="wifi" onChange={handleCheckboxClick} />
          <span>Wifi</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input
            type="checkbox"
            name="parking"
            onChange={handleCheckboxClick}
          />
          <span>Free parking spot</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input type="checkbox" name="pets" onChange={handleCheckboxClick} />
          <span>Pets allowed</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input
            type="checkbox"
            name="entrance"
            onChange={handleCheckboxClick}
          />
          <span>Private entrance</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input type="checkbox" name="tv" onChange={handleCheckboxClick} />
          <span>TV</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
          <input type="checkbox" name="radio" onChange={handleCheckboxClick} />
          <span>Radio</span>
        </label>
      </div>
    </div>
  );
}
