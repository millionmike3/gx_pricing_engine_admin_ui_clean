export default function Table({ columns, data }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border px-3 py-2 bg-gray-100">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col} className="border px-3 py-2">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
