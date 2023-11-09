// import Container from "../assets/container.jpg";
// import { FcSearch } from "react-icons/fc";
import {FiSearch} from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center justify-center bg_img">
        <div className="mb-4">
          <h3 className="font-sourcecode font-bold xs:text-[40px] text-navyblue">
            Walpaper Paradise
          </h3>
        </div>
        <div className="text-[#0F2C59]">
          <h1 className="text-[30px] mb-2">
            Best And Stunning Walpapers for your mobile and desktop
          </h1>
        </div>
        <div className="w-[50%] flex items-center relative text-gray-400 focus-within:text-bermuda">
          <FiSearch className='absolute w-5 h-5 ml-3'/>
          <input
            className="pr-3 pl-10 py-2 w-full rounded-2xl border-none outline-none ring-2"
            type="text"
            placeholder="Search Walpaper"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
