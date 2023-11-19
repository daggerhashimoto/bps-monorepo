import type { NextPage } from "next";

const ContainerOK: NextPage = () => {
  return (
    <div className="absolute top-[596px] left-[30px] w-[329px] h-[75px] text-center text-7xl text-white font-press-start-2p">
      <div className="absolute h-[93.33%] w-[48.51%] top-[1.33%] right-[26.69%] bottom-[5.33%] left-[24.8%] bg-gray box-border flex flex-col items-end justify-end py-[11px] px-[52.1358757019043px] border-[4px] border-solid border-white">
        <div className="self-stretch relative leading-[48px] uppercase">OK</div>
      </div>
      <div className="absolute top-[0px] left-[261px] w-[68px] h-[75px] flex flex-col items-start justify-end py-0 pr-0.5 pl-0 box-border">
        <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
        <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`>`}</div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[66px] h-[75px] flex flex-col items-center justify-start">
        <div className="relative bg-gray box-border w-[66px] h-[72px] border-[4px] border-solid border-white" />
        <div className="relative leading-[48px] uppercase inline-block w-16 h-[62px] shrink-0 mt-[-59px]">{`<`}</div>
      </div>
    </div>
  );
};

export default ContainerOK;
