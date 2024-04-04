import { Typography } from "@mui/material";
import React from "react";

const Visitor = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-center h-16 pt-3 text-lg">
        {props.name}
      </div>

      <div className="flex flex-col items-center justify-center pb-7 h-14">
        <div
          style={{ fontFamily: "SamsungSharpSans-bold" }}
          className="text-3xl text-black"
        >
          {props.count}
        </div>
      </div>
    </div>
  );
};

export default Visitor;
