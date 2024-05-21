import React from "react";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={(
          "focus:outline-none w-full border-2 border-slate-800 z-10 rounded-md  px-4 py-2 hover:shadow transition duration-200 bg-slate-100 mt-2"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
