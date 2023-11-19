import type { NextPage } from "next";

const WinningCard: NextPage = () => {
  return (
    <div className="absolute top-[212px] left-[30px] w-[329px] overflow-hidden flex flex-col items-center justify-start text-center text-7xl text-white font-press-start-2p">
      <div className="w-[230.6px] flex flex-col items-center justify-start gap-[24px]">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-end gap-[14px]">
          <div className="self-stretch relative leading-[48px]">You win!</div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[136px] shrink-0"
            alt=""
            src="/result.svg"
          />
        </div>
        <div className="self-stretch relative">
          <p className="m-0 leading-[48px]">Block</p>
          <p className="m-0 text-base leading-[38px]">beats</p>
          <p className="m-0 leading-[48px]">Scissors</p>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start mt-[-323px]">
        <div className="self-stretch relative h-[380px]" />
        <div className="self-stretch box-border h-[71.8px] flex flex-col items-center justify-end py-[10.83319091796875px] px-0 mt-[-16px] border-[4px] border-solid border-white">
          <div className="relative leading-[48px] uppercase">Continue</div>
        </div>
      </div>
    </div>
  );
};

export default WinningCard;
