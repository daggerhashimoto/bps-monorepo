import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FormContainer1 from "../components/form-container1";

const StartScreenBLUE10: NextPage = () => {
  const router = useRouter();

  const onBtnBackgroundClick = useCallback(() => {
    router.push("/start-screen-b-l-u-e8");
  }, [router]);

  return (
    <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-center py-[46.09112548828125px] pr-[31px] pl-[30px] box-border gap-[160px]">
      <img
        className="relative w-[149px] h-[67px]"
        alt=""
        src="/title-logo1.svg"
      />
      <FormContainer1
        displayName="Satoshi"
        btnBackgroundOpacity="unset"
        readyOpacity="unset"
        poweredByPlaypicCursor="pointer"
        onBtnBackgroundClick={onBtnBackgroundClick}
      />
    </div>
  );
};

export default StartScreenBLUE10;
