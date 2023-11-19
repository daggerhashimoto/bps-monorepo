import type { NextPage } from "next";

const ContainerFrame: NextPage = () => {
  return (
    <div className="absolute top-[245px] left-[30px] w-[329px] overflow-hidden flex flex-col items-center justify-end text-center text-7xl text-white font-press-start-2p">
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
        <div className="self-stretch relative h-[380px]" />
        <div className="self-stretch flex flex-row items-center justify-between mt-[-29px]">
          <div className="w-[66px] h-[75px] flex flex-col items-center justify-start opacity-[0.3]">
            <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
            <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`<`}</div>
          </div>
          <div className="w-[191px] flex flex-col items-center justify-start opacity-[0.3] text-blue">
            <div className="self-stretch relative bg-white h-[72px]" />
            <div className="self-stretch relative leading-[48px] uppercase mt-[-59px]">
              OK
            </div>
          </div>
          <div className="w-[68px] h-[75px] flex flex-col items-start justify-end py-0 pr-0.5 pl-0 box-border opacity-[0.3]">
            <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
            <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`>`}</div>
          </div>
        </div>
      </div>
      <div className="relative leading-[48px] mt-[-388px]">
        <p className="m-0">Waiting</p>
        <p className="m-0">for</p>
        <p className="m-0">Opponent</p>
        <p className="m-0">...</p>
      </div>
    </div>
  );
};

export default ContainerFrame;
