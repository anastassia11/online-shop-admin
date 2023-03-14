import React, { useState } from "react";

export default function Item({ info }) {
  const [total, setTotal] = useState(0);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="">
      <div className="ml-2.5">
        <h2 className="text-3xl">{info.name}</h2>
        <p className="">{info.desc}</p>
      </div>
      <div className="flex items-center mb-[50px]">
        <button
          className="bg-white text-black border-[1px] border-light-gray py-[5px] px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer mx-2.5 shadow-1px transition-opacity disabled:opacity-40 disabled:cursor-default hover:opacity-80 active:shadow-0px active:translate-y-px"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base">{total ? total : ""}</h3>
        <button className="bg-white text-black border-[1px] border-light-gray py-[5px] px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer mx-2.5 shadow-1px transition-opacity disabled:opacity-40 disabled:cursor-default hover:opacity-80 active:shadow-0px active:translate-y-px" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
