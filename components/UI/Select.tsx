interface SelectOption {
  label: string;
  value: any;
}

interface SelectProps {
  label: string;
  value: any;
  options: SelectOption[];
  onChange: (value: any) => void;
}

export default function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm mb-1">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2 bg-white"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
