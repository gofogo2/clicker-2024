import { Typography } from "@mui/material";
import React from "react";

const CurrentVisitor = (props:any) => {
  return (
    <div>
      <div
        
        className="flex items-center justify-center h-16 pb-8 text-xl"
      >
        {props.name}
      </div>

      <div className="flex flex-col items-center justify-center pb-5 h-26">
        <div style={{ fontFamily: "SamsungSharpSans-bold" }} className="text-8xl black ">{props.count}</div>
      </div>
    </div>
  );
};

export default CurrentVisitor;
