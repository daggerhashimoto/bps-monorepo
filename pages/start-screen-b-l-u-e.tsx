import type { NextPage } from "next";
import PoweredByPlaypic from "../components/powered-by-playpic";
import WinningCard from "../components/winning-card";

const StartScreenBLUE: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-[844px] overflow-hidden">
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
      <WinningCard />
    </div>
  );
};

export default StartScreenBLUE;
