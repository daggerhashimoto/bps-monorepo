import type { NextPage } from "next";
import PoweredByPlaypic from "./powered-by-playpic";

const SatoshiContainer1: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[117px] text-center text-sm text-white font-press-start-2p">
      <div className="self-stretch flex flex-col items-center justify-end gap-[22px]">
        <div className="w-[243px] flex flex-col items-center justify-end">
          <div className="relative leading-[48px]">Player:</div>
          <div className="self-stretch relative text-7xl leading-[48px] mt-[-4px]">
            Satoshi
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[35px] text-7xl text-blue">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative bg-white h-[71.8px]" />
            <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
              New
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[34px] text-sm text-white">
            <div className="self-stretch relative box-border h-1 border-t-[4px] border-solid border-white" />
            <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
              <div className="self-stretch bg-mediumblue flex flex-col items-end justify-end py-px px-[94px]">
                <div className="self-stretch relative leading-[48px] opacity-[0.5]">
                  Match Code
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-7xl">
                <div className="self-stretch relative box-border h-[71.8px] border-[4px] border-solid border-white" />
                <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
                  Join
                </div>
              </div>
            </div>
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

export default SatoshiContainer1;
