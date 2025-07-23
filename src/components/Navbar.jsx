import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const { fetchImageByCategory, setQuery  } = useContext(PixabayContext);
  return (
    <>
      <div className="container text-center my-4">
        <button
          type="button"
          onClick={() => fetchImageByCategory("fashion")}
          className="btn btn-outline-light mx-3"
        >
          Fashion
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("science")}
          className="btn btn-outline-light mx-3"
        >
          Science
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("nature")}
          className="btn btn-outline-light mx-3"
        >
          Nature
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("feelings")}
          className="btn btn-outline-light mx-3"
        >
          Feelings
        </button>

        <button
          type="button"
          onClick={() => fetchImageByCategory("industry")}
          className="btn btn-outline-light mx-3"
        >
          Industry
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("food")}
          className="btn btn-outline-light mx-3"
        >
          Food
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("bussiness")}
          className="btn btn-outline-light mx-3"
        >
          Business
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("computer")}
          className="btn btn-outline-light mx-3"
        >
          Computer
        </button>
        <button
          type="button"
          onClick={() => fetchImageByCategory("travel")}
          className="btn btn-outline-light mx-3"
        >
          Travel
        </button>
      </div>
      <div className="container " style={{ width: "22rem" }}>
        <input type="text"  
        
         onChange={(e)=>setQuery(e.target.value)} className="form-control"></input>
      </div>
    </>
  );
};

export default Navbar;
