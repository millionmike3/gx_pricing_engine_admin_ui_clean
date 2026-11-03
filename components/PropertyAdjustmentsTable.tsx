import Table from "./UI/Table";

export default function PropertyAdjustmentsTable() {
  const columns = ["propertyType", "adjustment"];

  const data = [
    { propertyType: "Single Family", adjustment: 0.00 },
    { propertyType: "Condo", adjustment: 0.15 },
    { propertyType: "2-4 Unit", adjustment: 0.25 },
    { propertyType: "Manufactured", adjustment: 0.50 }
  ];

  return (
    <div className="p-4">
      <Table columns={columns} data={data} />
    </div>
  );
}
