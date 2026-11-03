import { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function MacroWeightsEditor() {
  const [inflation, setInflation] = useState(0.25);
  const [gdp, setGdp] = useState(0.35);
  const [employment, setEmployment] = useState(0.40);

  const save = () => {
    console.log("Saving macro weights:", {
      inflation,
      gdp,
      employment
    });
  };

  return (
    <div className="p-4">
      <Input label="Inflation Weight" value={inflation} onChange={setInflation} />
      <Input label="GDP Weight" value={gdp} onChange={setGdp} />
      <Input label="Employment Weight" value={employment} onChange={setEmployment} />

      <Button onClick={save}>Save</Button>
    </div>
  );
}
