import React from "react";
import { headerNameList } from "../utils/dsaData";

const DsaHeader = () => {
  return (
    <div className=' bg-gray-800 grid gap-1 grid-cols-[5%,25%,10%,10%,10%,15%,15%,15%] text-white p-4 rounded-lg mb-4'>
      {headerNameList.map((value, index) => (
        <div key={index} className=' w-full mb-4'>
          <span className='text-blue-400 font-bold'>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default DsaHeader;
