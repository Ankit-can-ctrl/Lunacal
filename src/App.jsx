import LowerWidget from "./components/LowerWidget";
import NewLower from "./components/NewLower";
import Underline from "./components/Underline";
import UpperWidget from "./components/UpperWidget";

function App() {
  return (
    <div className="sub-container h-screen w-full bg-[#282C31] grid grid-cols-2">
      <div className="left-half"></div>
      <div className="right-half grid grid-rows-2 py">
        <div className="upper flex flex-col gap-4 items-center justify-center">
          <UpperWidget />
          <Underline />
        </div>
        <div className="lower flex flex-col items-center gap-4 justify-start">
          <NewLower />
          <Underline />
        </div>
      </div>
    </div>
  );
}

export default App;
