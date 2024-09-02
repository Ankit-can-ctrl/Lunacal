import { useState } from "react";
import "../index.css";
import icons from "../assets/left-icon.svg";

function UpperWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabContent = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    Experiences: "Content for Experiences tab...",
    Recommended: "Content for Recommended tab...",
  };

  return (
    <div>
      <div className="bg-[#363c43] p-4 rounded-2xl w-[720px] h-[316px] flex gap-2 items-start justify-center shadow-dark-bottom-right">
        <div className="left-icons">
          <img className=" w-[28px] h-[200px]" src={icons} alt="icons" />
        </div>
        <div className="data px-3 py-1 flex flex-col items-center justify-between w-full h-full">
          <div className="bg-[#171717] w-full rounded-2xl px-1 py-2 flex gap-3">
            {["About Me", "Experiences", "Recommended"].map((tab) => (
              <button
                key={tab}
                className={`relative px-4 py-2 rounded-xl w-[195px] h-[49px] text-xl font-semibold flex-grow overflow-hidden  transition-all duration-300 group ${
                  activeTab === tab
                    ? "bg-[#28292f] text-white shadow-dark-all"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {/* Animated Background */}
                <span
                  className="absolute inset-0 bg-[#28292f] transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <div className=" scrollable-container">
            <div className="text-gray-400 scrollable-content scroll-smooth font-semibold text-justify text-[20px] pr-5 h-[175px] w-[611px] overflow-y-auto ">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperWidget;
