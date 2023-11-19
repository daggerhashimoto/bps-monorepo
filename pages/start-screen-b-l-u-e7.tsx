import type { NextPage } from "next";
import PoweredByPlaypic from "../components/powered-by-playpic";

const StartScreenBLUE7: NextPage = () => {
  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-end py-[85px] pr-[31px] pl-[30px] box-border text-center text-[66px] text-white font-press-start-2p">
      <div className="w-[198px] overflow-hidden flex flex-col items-center justify-center gap-[99px]">
        <img
          className="relative w-[149px] h-[67px]"
          alt=""
          src="/title-logo2.svg"
        />
        <div className="self-stretch h-[541px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[426px]">
          <div className="self-stretch h-[133px] flex flex-col items-center justify-center gap-[9px]">
            <div className="self-stretch relative leading-[48px]">2:1</div>
            <div className="relative text-base leading-[48px]">Win:Loss</div>
          </div>
          <PoweredByPlaypic
            dimensions="/playpic-logo1.svg"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propWidth="unset"
            propAlignSelf="stretch"
            propColor="#fff"
          />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-end gap-[43px] mt-[-426px] text-7xl">
        <div className="relative leading-[48px]">
          <p className="m-0">You’re in</p>
          <p className="m-0">the lead!</p>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[22px] text-blue">
          <div className="self-stretch bg-white h-[71.8px] flex flex-col items-center justify-end py-[10.83319091796875px] px-0 box-border">
            <div className="relative leading-[48px] uppercase">Play again</div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-white">
            <div className="self-stretch relative box-border h-[71.8px] border-[4px] border-solid border-white" />
            <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE7;
