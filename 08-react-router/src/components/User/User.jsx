import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  // NOTE: userId should be same as the parameter passed in the URL
  const { userId } = useParams();
  return (
    <>
      <div className="p-4 text-3xl bg-gray-500 text-white">User : {userId}</div>
    </>
  );
};

export default User;
