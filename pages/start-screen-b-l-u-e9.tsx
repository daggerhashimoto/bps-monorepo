import type { NextPage } from "next";
import FormContainer1 from "../components/form-container1";

const StartScreenBLUE9: NextPage = () => {
  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-center py-[46.09112548828125px] pr-[31px] pl-[30px] box-border gap-[160px]">
      <img
        className="relative w-[149px] h-[67px]"
        alt=""
        src="/title-logo1.svg"
      />
      <FormContainer1 displayName="your display name" />
    </div>
  );
};

export default StartScreenBLUE9;
