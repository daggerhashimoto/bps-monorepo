import type { NextPage } from "next";
import WinnerCard1 from "../components/winner-card1";

const FinishedPlaying: NextPage = () => {
  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-center py-[46.09112548828125px] pr-[31px] pl-[30px] box-border gap-[83px]">
      <img
        className="relative w-[149px] h-[67px]"
        alt=""
        src="/title-logo1.svg"
      />
      <WinnerCard1 />
    </div>
  );
};

export default FinishedPlaying;
