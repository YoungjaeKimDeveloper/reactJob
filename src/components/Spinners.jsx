import React from "react";
import { ClipLoader } from "react-spinners";
const Spinners = ({ loading }) => {
  const override = {
    display: "block",
    marign: "100px auto",
  };
  return (
    <div className=" flex justify-center max-w-ful ">
      <ClipLoader
        color="red"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinners;
