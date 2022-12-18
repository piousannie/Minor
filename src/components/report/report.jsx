import React, { useState } from "react";
import "./report.css";
import Navbar from "../navbar/navbar";
import { useParams, useSearchParams } from "react-router-dom";


function Search() {
  const [img, setImg] = useState();
  const [searchParams, setSearchParams] = useSearchParams()
  const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };

  const INIT_STATE={
      imageURL: img,
      fullDesc: null,

  };


  
  return (
    <>
      <Navbar />
      <div className="reportgen">
        {
          searchParams.get("Upload Image") ? (
            <div className="uploadImageContainer class_smth">
              <p>
                numbers and shit here
              </p>
              <br />
              <div id="result_test">
                are you safe
              </div>
            </div>
          ) : (
            <div className="uploadImageContainer">
              <h3>
                <strong>Click here to upload image</strong>
              </h3>
              <form>
                <input type="file" name="Upload Image" onChange={onImageChange} />
                <button>Search</button>
              </form>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Search;
