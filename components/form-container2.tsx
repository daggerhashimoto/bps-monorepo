import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import PoweredByPlaypic from "./powered-by-playpic";

type FormContainer2Type = {
  userEmail?: string;

  /** Style props */
  continueOpacity?: CSSProperties["opacity"];
};

const FormContainer2: NextPage<FormContainer2Type> = ({
  userEmail,
  continueOpacity,
}) => {
  const buttonContinue1Style: CSSProperties = useMemo(() => {
    return {
      opacity: continueOpacity,
    };
  }, [continueOpacity]);

  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[220px] text-center text-sm text-white font-press-start-2p">
      <div className="self-stretch flex flex-col items-center justify-center gap-[18px]">
        <div className="relative leading-[48px]">Log in:</div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch bg-mediumblue flex flex-col items-end justify-end py-0 px-20">
            <div className="self-stretch relative leading-[48px]">
              {userEmail}
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-center justify-start text-7xl"
            style={buttonContinue1Style}
          >
            <div className="self-stretch relative bg-gray box-border h-[71.8px] border-[4px] border-solid border-white" />
            <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
              Continue
            </div>
          </div>
        </div>
      </div>
      <PoweredByPlaypic
        dimensions="/playpic-logo.svg"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="194px"
        propAlignSelf="unset"
        propColor="#fff"
      />
    </div>
  );
};

export default FormContainer2;
