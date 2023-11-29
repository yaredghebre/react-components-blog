import React from "react";

const Card = () => {
  return (
    <div>
      <div className="w-[600px] h-[400px] border rounded-xl">
        <div className="w-full h-4/5 bg-gray-300 text-center flex items-center justify-center">
          <p className="text-5xl font-thin">600 x 400</p>
        </div>
        <div className="w-full h-auto bg-white p-5">
          <h1 className="font-bold text-lg mb-3">Titolo del post</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            eaque temporibus, laborum tenetur iste, officiis ut beatae sint
            molestiae vitae provident, ipsa necessitatibus magnam perspiciatis
            in. Ab in libero dolores.
          </p>
          <button className="mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
            LEGGI DI PIÙ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
