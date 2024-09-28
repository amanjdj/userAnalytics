// import { useFinal } from "../contexts/finalContext";
import AccountDetails from "./AccountDetails";
import ChartBox from "./ChartBox";
import PhoneDetails from "./PhoneDetails";

function ActiveLayout() {
  // const { selectedTypeCalls } = useFinal();
  // console.log(selectedTypeCalls);
  return (
    <div className="grid gap-6">
      <div className="flex gap-5 ">
        <ChartBox />
        <PhoneDetails />
        {/* {selectedTypeCalls?.length > 0 ? <PhoneDetails /> : ""} */}
      </div>
      <AccountDetails />
    </div>
  );
}

export default ActiveLayout;
