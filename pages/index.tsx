import type { NextPage } from "next";
import Iframe from "react-iframe";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center mt-12">
      <Iframe
        url="https://multi-step-okeken.vercel.app/multi-step"
        width="640px"
        height="920px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

export default Home;
