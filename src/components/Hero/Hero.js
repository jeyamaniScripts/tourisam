import React, { useState } from "react";

const Hero = () => {
  const [price,setPrice]=useState(100)
  return (
    <div className="bg-black/20 absolute top-0 left-0 h-full w-full">
      <div className=" bg-primaryColor/10 h-full flex justify-center items-center">
        <div className="px-5 md:container">
          <div className="text-white">
            <h2>Our Pakages</h2>
            <h4>Search Your Destinations</h4>
            <div className="p-8 bg-white rounded-lg text-black mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="">
                  <label htmlFor="loaction" className=" opacity-70 "> Loacation</label>
                  <input type="text" placeholder="Dubai" className="bg-gray-100 py-1.5 rounded-full w-full px-4 outline-none hover:outline-primaryColor/50 mt-4"  />
                </div>
                <div>
                  <label htmlFor="date">Date</label>
                  <input type="date" className="bg-gray-100 py-1.5 rounded-full w-full px-4 outline-none hover:outline-primaryColor/50 mt-4" />
                </div>
                <div>
                  <label htmlFor="">
                    <div className="flex justify-between px-2">
                      <p>Max Price</p>
                      <p>$ {price}</p>
                    </div>
                   
                  </label>
                 
                   <input type="range" 
                          className=" appearance-none bg-color w-full rounded-full h-2 mt-4"
                          min='100'
                          max='1500'
                          onChange={(e)=>setPrice(e.target.value)} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
