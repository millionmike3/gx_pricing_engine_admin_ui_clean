export default function Input({ label, value, onChange }) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm mb-1">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
