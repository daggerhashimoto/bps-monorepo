import type { NextPage } from "next";
import FormContainer2 from "../components/form-container2";

const StartScreenBLUE12: NextPage = () => {
  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-center py-[46.09112548828125px] pr-[31px] pl-[30px] box-border gap-[193px]">
      <img
        className="relative w-[149px] h-[67px]"
        alt=""
        src="/title-logo1.svg"
      />
      <FormContainer2 userEmail="email address" continueOpacity="0.3" />
    </div>
  );
};

export default StartScreenBLUE12;
