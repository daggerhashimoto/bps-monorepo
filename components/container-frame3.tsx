import type { NextPage } from "next";
import PoweredByPlaypic from "./powered-by-playpic";

const ContainerFrame3: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[137px] text-center text-sm text-white font-press-start-2p">
      <div className="self-stretch box-border h-[380px] flex flex-col items-center justify-start py-[136px] px-0 border-[4px] border-solid border-white">
        <div className="w-[243px] flex flex-col items-center justify-end">
          <div className="relative leading-[48px]">Match Code:</div>
          <div className="self-stretch relative text-7xl leading-[48px] mt-[-4px]">
            a183oz
          </div>
        </div>
      </div>
      <PoweredByPlaypic
        dimensions="/playpic-logo.svg"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="194px"
        propAlignSelf="unset"
        propColor="#fff"
      />
    </div>
  );
};

export default ContainerFrame3;
