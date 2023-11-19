import type { NextPage } from "next";
import ContainerFrame1 from "../components/container-frame1";

const StartScreenBLUE4: NextPage = () => {
  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-center py-[46.09112548828125px] pr-[31px] pl-[30px] box-border gap-[93px]">
      <img
        className="relative w-[149px] h-[67px]"
        alt=""
        src="/title-logo1.svg"
      />
      <ContainerFrame1 />
    </div>
  );
};

export default StartScreenBLUE4;
