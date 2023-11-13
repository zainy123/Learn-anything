import axios from "axios";
import { useEffect, useState } from "react";
const Videos = () => {
  const [video, setVideo] = useState([]);
  const API_KEY = "RaeLfBqyyludtfdSd9IVkJ8Nd7juJKb8HESdxL0Z2LvLuRg2kDxgYZGb";
  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await axios.get(
          "https://api.pexels.com/videos/popular?per_page=10",
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        setVideo(data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, []);
  return (
    <div className='className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
      {video.map((videos, i) => {
        return (
          <div key={i}>
            <video>
              <source src={videos.url} />
            </video>
            <img src={videos.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
