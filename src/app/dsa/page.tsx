import ProblemRow from "@/components/Card/DSACard";
import DsaHeader from "@/components/navbar/DsaHeader";
import { dsaData } from "@/components/utils/dsaData";
import React from "react";

const DSAlgoComponent = () => {
  return (
    <main>
      <DsaHeader />
      {dsaData.map((item, index) => (
        <ProblemRow key={index} data={item} />
      ))}
    </main>
  );
};

export default DSAlgoComponent;
