import type { NextPage } from "next";
import Head from "next/head";
import FormContainer from "../components/form-container";
import PoweredByPlaypic from "../components/powered-by-playpic";

const StartScreenBLUE13: NextPage = () => {
  return (
    <>
      <Head>
        <title>Block Paper Scissors</title>
        <meta name="description" content="don't overthink, play" />
      </Head>
      <div className="relative bg-blue w-full overflow-hidden flex flex-col items-center justify-start py-[46.09112548828125px] pr-[25px] pl-[29px] box-border gap-[211px]">
        <FormContainer />
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
    </>
  );
};

export default StartScreenBLUE13;
