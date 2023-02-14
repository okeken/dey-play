import type { NextPage } from "next";
import React from "react";
import Iframe from "react-iframe";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center mt-12 overflow-hidden border">
        <Iframe
          url="https://multi-step-okeken.vercel.app/multi-step"
          // url="http://localhost:3000/multi-step"
          width="640px"
          height="920px"
          id=""
          className="overflow-hidden"
        />
      </div>
    </>
  );
};

export default Home;
