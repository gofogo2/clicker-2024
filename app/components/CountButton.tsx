import React from "react";

const CountButton = (props:any) => {
  return (
    <div
      className="flex items-center justify-center w-[4.8rem]   h-[4.8rem] text-white rounded-xl bg-[#3E91FF] active:bg-black"
      onClick={() => props.Add(props.count)}
    >
     <div className="flex items-center h-full p-0 pt-1 m-0 text-3xl">
        {props.count > 0 ? "+" + props.count : props.count}
      </div>
    </div>
  );
};

export default CountButton;
