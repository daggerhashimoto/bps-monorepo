import type { NextPage } from "next";
import PoweredByPlaypic from "./powered-by-playpic";

const WinnerCard1: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[109px] text-center text-lgi text-white font-press-start-2p">
      <div className="self-stretch flex flex-col items-start justify-start gap-[46px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[38px]">
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
            <div className="self-stretch relative leading-[35px]">
              <p className="m-0">The winner</p>
              <p className="m-0">has received</p>
              <p className="m-0">an NFT!</p>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[174px] shrink-0"
            alt=""
            src="/frame1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-7xl">
          <div className="self-stretch relative box-border h-[71.8px] border-[4px] border-solid border-white" />
          <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
            Continue
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

export default WinnerCard1;
