import { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function MarginProfileEditor() {
  const [baseMargin, setBaseMargin] = useState(1.25);
  const [riskMargin, setRiskMargin] = useState(0.50);

  const save = () => {
    console.log("Saving margin profile:", {
      baseMargin,
      riskMargin
    });
  };

  return (
    <div className="p-4">
      <Input label="Base Margin" value={baseMargin} onChange={setBaseMargin} />
      <Input label="Risk Margin" value={riskMargin} onChange={setRiskMargin} />

      <Button onClick={save}>Save</Button>
    </div>
  );
}
