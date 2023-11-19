import type { NextPage } from "next";
import PoweredByPlaypic from "./powered-by-playpic";

const ContainerFrame1: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[127px] text-center text-sm text-white font-press-start-2p">
      <div className="self-stretch flex flex-col items-center justify-center py-6 px-[43px] gap-[16px] border-[4px] border-solid border-white">
        <div className="self-stretch flex flex-col items-center justify-end">
          <div className="relative leading-[48px]">Match Code:</div>
          <div className="self-stretch relative text-7xl leading-[48px] mt-[-10px]">
            a183oz
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[219px] shrink-0"
          alt=""
          src="/frame.svg"
        />
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

export default ContainerFrame1;
