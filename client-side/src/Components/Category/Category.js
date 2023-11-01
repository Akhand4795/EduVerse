import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";

const Category = () => {
  return (
    <div className="w-full flex justify-self-center justify-center relative md:w-4/5 h-14 whitespace-nowrap border-b-2 border-gray-400 m-4">
      <span className="flex-none absolute left-2">
        <NavigateBefore />
      </span>
      <div className="flex-initial w-64 md:w-[40rem] h-12 overflow-x-auto mt-1">
        <span className="mr-4">For you</span>
        <span className="mr-4">Web Development</span>
        <span className="mr-4">App Development</span>
        <span className="mr-4">Game Development</span>
        <span className="mr-4">Python</span>
        <span className="mr-4">Data Structure</span>
        <span className="mr-4">JavaScript</span>
        <span className="mr-4">Data Science</span>
      </div>
      <span className="flex-none absolute right-2">
        <NavigateNext />
      </span>
    </div>
  );
};

export default Category;
