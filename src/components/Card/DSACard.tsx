"use client";
import React, { useState } from "react";
import { IDSADataType } from "../utils/dsaData";
import { DifficultyTypeEnum } from "@/enum";
import ModalComponent from "../Modal/Modal";
interface IProblemRowProps {
  data: IDSADataType;
}
const ProblemRow = ({ data }: IProblemRowProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSolution, setIsSolution] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>("");
  return (
    <>
      <div className='grid gap-1 grid-cols-[5%,25%,10%,10%,10%,15%,15%,15%] align-center bg-gray-800 text-white p-4 rounded-lg mb-4'>
        <span className='text-gray-300 truncate '>{data.id}</span>
        <span className='text-gray-300 truncate '>{data.name}</span>
        <span className='text-gray-300 truncate '>{data.category}</span>
        <div>
          <a
            href={data.videoLink}
            className='text-blue-300 hover:text-blue-500 hover:bg-slate-600 py-1 px-8 truncate border-2 border-solid border-gray-500'
            target='_blank'
            rel='noopener noreferrer'>
            {"Link"}
          </a>
        </div>
        <div>
          <a
            href={data.leetcodeLink}
            className='text-blue-300 hover:text-blue-500 hover:bg-slate-600 py-1 px-8 truncate border-2 border-solid border-gray-500'
            target='_blank'
            rel='noopener noreferrer'>
            {"Link"}
          </a>
        </div>
        <div>
          <span
            className={`${
              data.difficulty === DifficultyTypeEnum.EASY ? " bg-lime-700" : ""
            } ${
              data.difficulty === DifficultyTypeEnum.MEDIUM
                ? "bg-amber-500"
                : ""
            } ${
              data.difficulty === DifficultyTypeEnum.HARD ? "bg-red-800" : ""
            } py-1 px-10 border-gray-700 border-2 border-solid text-gray-300 truncate`}>
            {data.difficulty}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              setIsOpen(true);
              setNotes(data.solution);
              setIsSolution(true);
            }}
            className='text-gray-300 truncate hover:bg-slate-600 py-1 cursor-pointer px-8 border-2 border-solid border-gray-500'>
            {"Solutions"}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              setIsOpen(true);
              setNotes(data.notes);
            }}
            className='text-gray-300 truncate hover:bg-slate-600 py-1 px-8 cursor-pointer border-2 border-solid border-gray-500'>
            {"Notes"}
          </span>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        notes={notes}
        isSolution={isSolution}
      />
    </>
  );
};

export default ProblemRow;
