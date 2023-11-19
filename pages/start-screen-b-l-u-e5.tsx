import type { NextPage } from "next";
import PoweredByPlaypic from "../components/powered-by-playpic";
import ContainerOK from "../components/container-o-k";

const StartScreenBLUE5: NextPage = () => {
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
      <div className="absolute top-[245px] left-[30px] w-[329px] h-[380px]" />
      <img
        className="absolute h-[25.07%] w-[50.31%] top-[30.69%] right-[26.87%] bottom-[44.24%] left-[22.82%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/block.svg"
      />
      <div className="absolute top-[59.72%] left-[31.03%] leading-[48px]">
        Block
      </div>
      <ContainerOK />
    </div>
  );
};

export default StartScreenBLUE5;
