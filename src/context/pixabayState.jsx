import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

function PixabayState(props) {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("paris");

  const api_key = "51436168-22ab8c9fc2775939b1fde1b71";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);

      console.log(data.hits);
    };
    fetchData();
  }, []);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };
  return (
    <PixabayContext.Provider
      value={{
        imageData,
        fetchImageByCategory,
        setQuery,
      }}
    >
      {" "}
      {props.children}
    </PixabayContext.Provider>
  );
}

export default PixabayState;
