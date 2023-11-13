// import Container from "../assets/container.jpg";
// import { FcSearch } from "react-icons/fc";

import ImageGallery from "../components/ImageGallery/ImageGallery";
// import ImageUpload from "./imageUpload/index";
import CuratedImages from "../components/CuratedImages/CuratedImages";

import Navbar from "../components/Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <ImageGallery />
      {/* Curates images may show */}
      <CuratedImages />
      {/* <div className="items-center justify-center flex gap-2">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div> */}
    </>
  );
};

export default Home;
