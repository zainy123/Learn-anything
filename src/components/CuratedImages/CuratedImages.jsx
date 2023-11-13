import { useEffect, useState } from "react";
import axios from "axios";
const CuratedImages = () => {
  const [images, setImages] = useState([]);

  const API_KEY = "RaeLfBqyyludtfdSd9IVkJ8Nd7juJKb8HESdxL0Z2LvLuRg2kDxgYZGb";
  const curatedImages = async () => {
    const { data } = await axios.get(
      "https://api.pexels.com/v1/curated?per_page=80",
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    setImages(data.photos);
  };
  useEffect(() => {
    curatedImages();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img
              id={image.id}
              src={image.src.large}
              className="h-72 w-full rounded-lg object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CuratedImages;
