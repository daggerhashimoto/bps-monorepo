import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import PoweredByPlaypic from "./powered-by-playpic";

type FormContainer1Type = {
  displayName?: string;

  /** Style props */
  btnBackgroundOpacity?: CSSProperties["opacity"];
  readyOpacity?: CSSProperties["opacity"];
  poweredByPlaypicCursor?: CSSProperties["cursor"];

  /** Action props */
  onBtnBackgroundClick?: () => void;
};

const FormContainer1: NextPage<FormContainer1Type> = ({
  displayName,
  btnBackgroundOpacity,
  readyOpacity,
  poweredByPlaypicCursor,
  onBtnBackgroundClick,
}) => {
  const yourDisplayNameStyle: CSSProperties = useMemo(() => {
    return {
      opacity: btnBackgroundOpacity,
    };
  }, [btnBackgroundOpacity]);

  const buttonContinueStyle: CSSProperties = useMemo(() => {
    return {
      opacity: readyOpacity,
    };
  }, [readyOpacity]);

  const btnBackgroundStyle: CSSProperties = useMemo(() => {
    return {
      cursor: poweredByPlaypicCursor,
    };
  }, [poweredByPlaypicCursor]);

  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[186px] text-center text-4xl text-white font-press-start-2p">
      <div className="self-stretch flex flex-col items-center justify-center gap-[37px]">
        <div className="relative leading-[48px]">
          <p className="m-0">What’s your</p>
          <p className="m-0">name?</p>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[20px] text-sm">
          <div className="self-stretch bg-mediumblue flex flex-col items-end justify-end py-px px-[45px]">
            <div
              className="self-stretch relative leading-[48px] opacity-[0.5]"
              style={yourDisplayNameStyle}
            >
              {displayName}
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-center justify-start opacity-[0.3] text-7xl text-blue"
            style={buttonContinueStyle}
          >
            <div
              className="self-stretch relative bg-white h-[71.8px]"
              style={btnBackgroundStyle}
              onClick={onBtnBackgroundClick}
            />
            <div className="relative leading-[48px] uppercase inline-block w-[243px] h-[62px] shrink-0 mt-[-58px]">
              Ready
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

export default FormContainer1;
