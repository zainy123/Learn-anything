// import Container from "../assets/container.jpg";

import { FcSearch } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <div className="flex flex-col pl-12 items-center justify-center bg_img">
        <div className="mb-4">
          <h3 className="font-sourcecode font-bold text-3xl text-navyblue">
            Walpaper Paradise
          </h3>
        </div>
        <div className="text-[#0F2C59]">
          <h1 className="text-xl mb-2">
            Best And Stunning Walpapers for your mobile and desktop
          </h1>
        </div>
        <div className="w-[40%] mt-4 font-roboto flex items-center justify-between">
          <input
            className="p-3 w-full bg-transparent outline-none border-none rounded-[20px] ring-[10px]"
            type="text"
            placeholder="Search Walpaper"
          />
          <div className="absolute right-[500px] cursor-pointer">
            <FcSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
