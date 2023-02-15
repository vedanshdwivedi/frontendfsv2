import { React, useState, CSSProperties } from "react";
import { CircleLoader, HashLoader, PropagateLoader, RingLoader } from "react-spinners";
// import { HashLoader, PropagateLoader } from "react-spinners/ClipLoader";

const HashSpinner = (prop) => {
  const size = prop.size || 20;
  const [color, setColor] = useState("#3f5de1");
  return (
    <>
      <CircleLoader color={color} size={size} />
    </>
  );
};

export default HashSpinner;
