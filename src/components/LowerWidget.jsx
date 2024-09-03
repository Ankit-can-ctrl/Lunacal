import { useState } from "react";
import icons from "../assets/left-icon.svg";
import newImage from "../assets/image.png";

function LowerWidget() {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;
  const totalPages = 3; // Assuming we have 3 pages of images

  const dummyImages = Array(9).fill(newImage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="bg-[#363c43] p-4 rounded-2xl shadow-dark-bottom-right w-[720px] h-[330px] flex gap-5">
      <div className="left-icons">
        <img className=" w-[28px] h-[200px]" src={icons} alt="icons" />
      </div>
      <div className=" flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between w-full">
            <button className="bg-[#171717] shadow-dark-bottom-right text-white text-2xl font-semibold w-[149px] h-[62px] rounded-2xl">
              Gallery
            </button>
          </div>
          <div className="flex items-center text-white gap-5">
            <button className="bg-gray-600 shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)]  text-white w-[131px] h-[46px] rounded-full flex items-center font-semibold justify-center">
              <span>+</span> ADD IMAGE
            </button>
            <button
              onClick={prevPage}
              className="bg-gray-800 p-3 text-xl rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </button>
            <button
              onClick={nextPage}
              className="bg-gray-800 p-3 text-xl rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {dummyImages
            .slice(
              currentPage * imagesPerPage,
              (currentPage + 1) * imagesPerPage
            )
            .map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LowerWidget;
