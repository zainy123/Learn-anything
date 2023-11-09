// import Container from "../assets/container.jpg";
// import { FcSearch } from "react-icons/fc";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    try {
      // setLoading(true);
      const {data} = await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization : 'RaeLfBqyyludtfdSd9IVkJ8Nd7juJKb8HESdxL0Z2LvLuRg2kDxgYZGb'
        }
      })
      setData(data.photos)
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  const onKeyHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };
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
          <FiSearch className="absolute w-5 h-5 ml-3" />
          <input
            className="pr-3 pl-10 py-2 w-full rounded-2xl border-none outline-none ring-2"
            type="text"
            placeholder="Search Walpaper"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyHandler}
          />
        </div>
      </div>
      {/* {loading && <h1>Fetching ....</h1>} */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 items-center mt-[20px] ">
        {data?.map((item) => {
          return (
              <img
                key={item.id}
                id={item.id}
                src={item.src.medium}
                alt={item.id}
                className="bg-cover w-[200px] h-[200px] justify-center rounded-lg"
              />
            
          );
        })}
      </div>
    </>
  );
};

export default Home;
