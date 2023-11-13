import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const ImageGallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const API_KEY = "RaeLfBqyyludtfdSd9IVkJ8Nd7juJKb8HESdxL0Z2LvLuRg2kDxgYZGb";

  const getPhotos = async () => {
    try {
      // setLoading(true);
      const { data } = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=40`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setData(data.photos);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  const onKeyHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
      setSearchParams({ query: e.params.query });
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center bg_img">
        <div className="mb-4">
          <h3 className="font-sourcecode font-bold xs:text-[40px] ">
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
            className="pr-3 pl-10 py-2 w-full rounded-2xl border-none outline-none ring-2 ring-info"
            type="text"
            placeholder="Search Walpaper"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyHandler}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {data?.map((item) => {
          return (
            <img
              key={item.id}
              id={item.id}
              src={item.src.large}
              alt={item.id}
              className="h-72 w-full rounded-lg object-cover"
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
