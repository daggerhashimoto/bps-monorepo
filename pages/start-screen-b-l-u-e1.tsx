import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PoweredByPlaypic from "../components/powered-by-playpic";
import ContainerFrame from "../components/container-frame";

const StartScreenBLUE1: NextPage = () => {
  const router = useRouter();

  const onStartScreenBLUEClick = useCallback(() => {
    router.push("/start-screen-b-l-u-e");
  }, [router]);

  return (
    <div
      className="relative bg-blue w-full h-[844px] overflow-hidden cursor-pointer"
      onClick={onStartScreenBLUEClick}
    >
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
      <ContainerFrame />
    </div>
  );
};

export default StartScreenBLUE1;
