import { useState, useRef, useEffect } from "react";
import icons from "../assets/left-icon.svg";
import newImage from "../assets/image.png";

function NewLower() {
  const [dummyImages, setDummyImages] = useState(
    Array.from({ length: 9 }, () => newImage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [swipeDirection, setSwipeDirection] = useState("");
  const imagesPerPage = 3;
  const imageGap = 8; // Gap between images
  const totalImages = dummyImages.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.style.transition = "none";
      const resetTransform = () => {
        galleryRef.current.style.transition = "transform 0.5s ease-in-out";
        galleryRef.current.style.transform = `translateX(-${
          100 * currentPage
        }%)`;
      };
      resetTransform();
    }
  }, [currentPage]);

  const nextPage = () => {
    setSwipeDirection("right");
    setCurrentPage((prev) => {
      const nextPage = (prev + 1) % (totalPages + 2); // +2 for the duplicated pages
      return nextPage === 0 ? totalPages + 1 : nextPage; // Skip the first duplicated page
    });
  };

  const prevPage = () => {
    setSwipeDirection("left");
    setCurrentPage((prev) => {
      const prevPage = (prev - 1 + (totalPages + 2)) % (totalPages + 2); // +2 for the duplicated pages
      return prevPage === totalPages + 1 ? 1 : prevPage; // Skip the last duplicated page
    });
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDummyImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#363c43] p-4 rounded-2xl shadow-dark-bottom-right w-[720px] h-[330px] flex gap-5">
      <div className="left-icons">
        <img className="w-[28px] h-[200px]" src={icons} alt="icons" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between w-full">
            <button className="bg-[#171717] shadow-dark-bottom-right text-white text-2xl font-semibold w-[149px] h-[62px] rounded-2xl">
              Gallery
            </button>
          </div>
          <div className="flex items-center text-white gap-5">
            <label className="bg-gray-600 shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)] text-white w-[131px] h-[46px] rounded-full flex items-center font-semibold justify-center cursor-pointer">
              <span>+</span> ADD IMAGE
              <input
                type="file"
                accept="image/*"
                onChange={handleAddImage}
                className="hidden"
              />
            </label>
            <button
              onClick={prevPage}
              className="bg-gray-800 p-3 text-xl active:bg-gray-400 rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)]"
              aria-label="Previous Page"
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
              className="bg-gray-800 p-3 text-xl rounded-full active:bg-gray-400 shadow-[5px_5px_10px_rgba(0,0,0,0.7),-2px_-1px_10px_rgba(209,213,219,0.5)]"
              aria-label="Next Page"
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
        <div className="overflow-hidden w-full h-full">
          <div
            ref={galleryRef}
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${100 * currentPage}%)`,
            }}
          >
            {dummyImages
              .concat(dummyImages)
              .concat(dummyImages)
              .map((src, index) => (
                <div
                  key={index}
                  className="inline-block group"
                  style={{
                    width: `calc(100% / ${imagesPerPage} - ${imageGap}px)`,
                  }}
                >
                  <div
                    className="aspect-square rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105 group-hover:filter group-hover:invert group-hover:sepia group-hover:opacity-100 group-hover:brightness-110 group-hover:contrast-110"
                    style={{
                      marginRight: `${imageGap}px`,
                      transformOrigin: "bottom left",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLower;
