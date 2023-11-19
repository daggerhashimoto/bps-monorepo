import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FormContainerType = {
  /** Style props */
  titleLogoAlignItems?: CSSProperties["alignItems"];
  blockColor?: CSSProperties["color"];
  dontOverthinkItAlignSelf?: CSSProperties["alignSelf"];
  dontOverthinkItWidth?: CSSProperties["width"];
  buttonPlayColor?: CSSProperties["color"];
  playBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const FormContainer: NextPage<FormContainerType> = ({
  titleLogoAlignItems,
  blockColor,
  dontOverthinkItAlignSelf,
  dontOverthinkItWidth,
  buttonPlayColor,
  playBackgroundColor,
  propColor,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: titleLogoAlignItems,
    };
  }, [titleLogoAlignItems]);

  const titleLogoStyle: CSSProperties = useMemo(() => {
    return {
      color: blockColor,
    };
  }, [blockColor]);

  const cTAStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: dontOverthinkItAlignSelf,
      width: dontOverthinkItWidth,
    };
  }, [dontOverthinkItAlignSelf, dontOverthinkItWidth]);

  const dontOverthinkItStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonPlayColor,
    };
  }, [buttonPlayColor]);

  const btnBackground1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: playBackgroundColor,
    };
  }, [playBackgroundColor]);

  const playStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="self-stretch overflow-hidden flex flex-col items-start justify-center gap-[131px] text-center text-23xl text-white font-press-start-2p"
      style={frameStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-center">
        <div
          className="self-stretch relative leading-[56px] uppercase"
          style={titleLogoStyle}
        >
          <p className="m-0">Block</p>
          <p className="m-0">Paper</p>
          <p className="m-0">Scissors</p>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-end gap-[21px] text-sm"
        style={cTAStyle}
      >
        <div
          className="self-stretch relative leading-[48px]"
          style={dontOverthinkItStyle}
        >
          Don’t overthink it.
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-7xl text-blue">
          <div
            className="self-stretch relative bg-white h-[71.8px]"
            style={btnBackground1Style}
          />
          <div
            className="relative leading-[48px] uppercase inline-block w-[104px] h-[62.1px] shrink-0 mt-[-58px]"
            style={playStyle}
          >
            Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
