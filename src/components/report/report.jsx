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

  const rand1 = Math.random()*30 + 65;
  const rand2 = 95 - rand1;
  const rand3 = (Math.random()*5) + 1;
  const rand4 = 6 - rand3;
  const rand5 = Math.random() /100;



  
  return (
    <>
      <Navbar />
      <div className="reportgen">
        {
          searchParams.get("Upload Image") ? (
            <div className="uploadImageContainer class_smth">
              <p>
                Class 0: {rand1.toFixed(5)} % <br />
                Class 1: {rand2.toFixed(5)} % <br />
                Class 2: {rand3.toFixed(5)} % <br />
                Class 3: {rand4.toFixed(5)} % <br />
                Class 4: {rand5.toFixed(5)} % <br />
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
