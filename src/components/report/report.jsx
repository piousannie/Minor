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
                Class 0: 100 % <br />
                Class 1: 0 % <br />
                Class 2: 0 % <br />
                Class 3: 0 % <br />
                Class 4: 0 % <br />
              </p>
              <br />
              <div id="result_test">
                You belong to Class 0, You are Safe!
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
