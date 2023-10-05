// eslint-disable-next-line react/prop-types
export default function TextInput({ label, id, type, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input type={type} id={id} onChange={onChange} className="rounded-md text-black px-11 py-1" />
    </div>
  );
}
