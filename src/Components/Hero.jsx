
import React from 'react';
import foodImg from "../assets/images/food-img.png";


const Hero = () => {
  return (
    <div
      className=" container d-flex border border-2 border-dark mt-3 align-items-center justify-content-evenly"
      style={{ height: "350px", width: "75%", borderRadius: '10px' }}
    >
      
      <div style={{ width: "50%", height: "100%" }}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
           <p className="text-white" style={{ fontSize: "3rem", textAlign: "center" ,fontFamily: "Karla , sans-serif",fontWeight:"900",lineHeight:"1"}}>
             Deliciousness is right here
           </p>
           <p
            style={{
              color: "#f1c40f",
              fontSize: "3rem",
              textAlign: "center",
              fontFamily: "Karla , sans-serif",
              fontWeight:"900"
            
            }}
          >
            enjoy every bite
          </p>
        </div>
      </div>

      {/* Div#2 */}
      <div style={{ width: "50%", height: "100%" }}>
        <div
          style={{
            margin:"auto",
            width: "80%",
            height: "100%",
            backgroundImage: `url(${foodImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
