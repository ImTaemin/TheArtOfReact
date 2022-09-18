import React, { useContext } from "react";
import ColorContext from "../context/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    //   {/*객체 비구조화 할당*/}
    //   {/*{({state})} */}
    //   {(value) => (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color, //state.color
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor, //state.subcolor
        }}
      />
    </>
  );
};

export default ColorBox;
