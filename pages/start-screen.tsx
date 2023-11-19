import type { NextPage } from "next";
import FormContainer from "../components/form-container";
import PoweredByPlaypic from "../components/powered-by-playpic";

const StartScreen: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start py-[46.09114074707031px] pr-[25px] pl-[29px] box-border gap-[208px]">
      <FormContainer
        titleLogoAlignItems="center"
        blockColor="#000"
        dontOverthinkItAlignSelf="unset"
        dontOverthinkItWidth="266px"
        buttonPlayColor="#000"
        playBackgroundColor="#000"
        propColor="#fff"
      />
      <PoweredByPlaypic dimensions="/playpic-logo2.svg" />
    </div>
  );
};

export default StartScreen;
