import type { NextPage } from "next";
import PoweredByPlaypic from "../components/powered-by-playpic";

const StartScreenBLUE2: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-[844px] overflow-hidden text-center text-7xl text-white font-press-start-2p">
      <PoweredByPlaypic
        dimensions="/playpic-logo.svg"
        propPosition="absolute"
        propTop="782px"
        propLeft="98px"
        propWidth="194px"
        propAlignSelf="unset"
        propColor="#fff"
      />
      <img
        className="absolute top-[85px] left-[120px] w-[149px] h-[67px]"
        alt=""
        src="/title-logo.svg"
      />
      <div className="absolute top-[245px] left-[30px] w-[329px] overflow-hidden flex flex-col items-center justify-end">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
          <div className="self-stretch relative h-[380px]" />
          <div className="self-stretch flex flex-row items-center justify-between mt-[-29px]">
            <div className="w-[241.1px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
              <div className="w-[66px] h-[75px] flex flex-col items-center justify-start">
                <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
                <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`<`}</div>
              </div>
              <div className="bg-gray box-border w-[159.6px] flex flex-col items-end justify-end py-[11px] px-[52.1358757019043px] border-[4px] border-solid border-white">
                <div className="self-stretch relative leading-[48px] uppercase">
                  OK
                </div>
              </div>
            </div>
            <div className="w-[68px] h-[75px] flex flex-col items-start justify-end py-0 pr-0.5 pl-0 box-border">
              <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
              <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`>`}</div>
            </div>
          </div>
        </div>
        <div className="w-[242.9px] overflow-hidden flex flex-col items-center justify-start gap-[56px] mt-[-388px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[164.4px] shrink-0"
            alt=""
            src="/scissors.svg"
          />
          <div className="self-stretch relative leading-[48px]">Scissors</div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE2;
