import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type PoweredByPlaypicType = {
  dimensions?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const PoweredByPlaypic: NextPage<PoweredByPlaypicType> = ({
  dimensions,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  propColor,
}) => {
  const poweredByPlaypicStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  const poweredByStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="w-[194px] flex flex-row items-center justify-start gap-[9px] text-right text-5xs text-black font-press-start-2p"
      style={poweredByPlaypicStyle}
    >
      <div className="flex-1 relative" style={poweredByStyle}>
        powered by
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[15.9px]"
        alt=""
        src={dimensions}
      />
    </div>
  );
};

export default PoweredByPlaypic;
