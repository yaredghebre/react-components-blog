import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div>
      <main className="h-[800px] w-full bg-gray-200 py-10">
        <h1 className="font-bold text-2xl text-center">Il mio Blog</h1>
        <div className="flex flex-col items-center justify-center my-10">
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Main;
