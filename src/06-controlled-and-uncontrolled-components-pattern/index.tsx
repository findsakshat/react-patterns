import ControlledInput from "./ControlledInput";
import UnControledInput from "./UnControlledInput";

export default function ControlledAndUnControlledComponentPatternExample() {

  return (
    <div>
      <div className="p-6 border shadow-sm rounded-md">
        <p className="text-sm">CONTROLLED INPUT:</p>
        <ControlledInput />
      </div>
      <div className="p-6 border shadow-sm rounded-md mt-6">
        <p className="text-sm">UN-CONTROLLED INPUT:</p>
        <UnControledInput />
      </div>
    </div>
  )
}