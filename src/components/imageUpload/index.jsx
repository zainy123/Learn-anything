import axios from "axios";
import { useState } from "react";

const ImageUpload = () => {
  const [url, setURL] = useState("");
  const [delay, setDelay] = useState(0);
  const [image, setImage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  const uploadImage = async () => {
    try {
      const { data } = await axios.get(
        `https://api.apilayer.com/image_upload/url?url=${url}?delay=${delay}`,
        {
          headers: {
            Authorization: "sswZ4DmAjAdFCJuK4ev7sbzs0L8WMp4b",
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setURL(data.image_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Upload image</h1>
      <form method="POST">
        <label htmlFor="delay">Delay</label>
        <input
          type="number"
          id="delay"
          name="delay"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter Category Name"
        />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="file">Upload Image</label>
        <input type="file" name="file" id="file" accept="image/*" onChange={handleFileChange}/>
        <button type="submit" onSubmit={uploadImage}>
          Submit
        </button>
      </form>
      <img src={image} alt={image.name}/>
    </div>
  );
};

export default ImageUpload;
