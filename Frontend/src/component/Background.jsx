import React from "react";
import Image1 from "../assets/Reimage1.webp";
import Image2 from "../assets/Reimage2.webp";
import Image3 from "../assets/Reimage3.jpg";
import Image4 from "../assets/Reimage4.webp";

const Background = ({ heroCount }) => {
  if (heroCount === 0) {
    return (
      <div className="w-[59%]">
      <img
        src={Image2}
        alt=""
        className="w-[100%] max:sm-h-[250px] h-[100%] float-left overflow-auto object-cover"
        />
        </div>
    );
  } else {
    if (heroCount === 1) {
      return (
      <div className="w-[59%]">

        <img
          src={Image1}
          alt=""
          className="w-[100%] max:sm-h-[250px] h-[100%] float-left overflow-auto object-cover"
        />
        </div>
      );
    } else {
      if (heroCount === 2) {
        return (
      <div className="w-[59%]">

          <img
            src={Image3}
            alt=""
            className="w-[100%] max:sm-h-[250px] h-[100%] float-left overflow-auto object-cover"
          />
          </div>
        );
      } else {
        if (heroCount === 3) {
          return (
      <div className="w-[59%]">

            <img
              src={Image4}
              alt=""
              className="w-[100%] max:sm-h-[250px] h-[100%] float-left overflow-auto object-cover"
            />
            </div>
          );
        }
      }
    }
  }
};

export default Background;
