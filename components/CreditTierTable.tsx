import Table from "./UI/Table";

export default function CreditTierTable() {
  const columns = ["tier", "minScore", "maxScore", "adjustment"];

  const data = [
    { tier: "A", minScore: 760, maxScore: 850, adjustment: -0.25 },
    { tier: "B", minScore: 720, maxScore: 759, adjustment: -0.10 },
    { tier: "C", minScore: 680, maxScore: 719, adjustment: 0.50 },
    { tier: "D", minScore: 640, maxScore: 679, adjustment: 1.00 },
    { tier: "E", minScore: 580, maxScore: 639, adjustment: 1.25 },
    { tier: "F", minScore: 540, maxScore: 579, adjustment: 1.50 },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
