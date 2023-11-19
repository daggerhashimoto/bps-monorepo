import type { NextPage } from "next";

const CTA: NextPage = () => {
  return (
    <div className="w-[266px] flex flex-col items-center justify-end gap-[24px] text-center text-sm text-black font-press-start-2p">
      <div className="self-stretch relative leading-[48px]">
        Don’t overthink it.
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-7xl text-white">
        <div className="self-stretch relative bg-black h-[71.8px]" />
        <div className="relative leading-[48px] uppercase inline-block w-[104px] h-[62.1px] shrink-0 mt-[-58px]">
          Play
        </div>
      </div>
    </div>
  );
};

export default CTA;
