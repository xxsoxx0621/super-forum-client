import React from "react";

const Main = () => {
  const test = false;

  if (test) throw new Error("Main fail");
  else {
    return <main className="content">Main</main>;
  }
};

export default Main;
