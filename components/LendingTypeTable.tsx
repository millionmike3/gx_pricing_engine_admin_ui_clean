import Table from "./UI/Table";

export default function LendingTypeTable() {
  const columns = ["type", "description", "adjustment"];

  const data = [
    { type: "Conventional", description: "Standard agency loan", adjustment: 1.00 },
    { type: "FHA", description: "Government insured", adjustment: 2.15 },
    { type: "VA", description: "Veteran loan", adjustment: 2.25 },
    { type: "Non-QM", description: "Non-qualified mortgage", adjustment: 3.00 },
    { type: "Hard-Money", description: "Private mortgage", adjustment: 4.00 }
  ];

  return (
    <div className="p-4">
      <Table columns={columns} data={data} />
    </div>
  );
}
