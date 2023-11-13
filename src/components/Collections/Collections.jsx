import axios from "axios";
import { useEffect, useState } from "react";
const Collections = () => {
  const [collections, setCollections] = useState([]);
  const API_KEY = "RaeLfBqyyludtfdSd9IVkJ8Nd7juJKb8HESdxL0Z2LvLuRg2kDxgYZGb";

  const getCollections = async () => {
    try {
      const { data } = await axios.get(
        "https://api.pexels.com/v1/collections/featured?per_page=8",
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setCollections(data.collections);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCollections();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
      {collections.map((collection, i) => {
        return (
          <div
            key={i}
            id={collection.id}
            className="flex flex-col justify-between h-[150px] w-full bg-white p-3 border rounded-lg shadow-sm outline-none border-none text-gray-950 "
          >
            <h1>{collection.title}</h1>
            <p>{collection.media_count}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
