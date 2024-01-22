import React from "react";
import video from "../../assets/video/trip_-_99388 (720p).mp4";
import logo from "../../assets/logo/11098981.png";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import { content } from "../../content";
import { Link } from "react-router-dom";
const Footer = () => {
  const { nav } = content;
  return (
    <div className="relative">
      <video className="h-[550px] w-full object-cover" autoPlay muted loop>
        <source src={video} />
      </video>
      <div className=" absolute top-0 left-0 bg-black/20 w-full h-full">
        <div className=" h-full flex justify-center items-center">
          <div className="container">
            <div className=" bg-white p-4 ">
              <div className="grid grid-col-1 md:grid-cols-3 space-y-4">
                <div className="space-y-4">
                  <img src={logo} alt="" className="w-14" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                {/* Quick Links  */}
                <div>
                  <h2>Quick Links</h2>
                  <div>
                    <ul>
                      {nav.NavLinks.map((list, i) => (
                        <li key={i} className="font-semibold hover:text-primaryColor">
                          <Link to={list.link}>{list.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className=" space-y-3">
                  <div className="flex items-center gap-2">
                    {/* <FaAddress/> */}
                    <FaArrowUp />
                    <p>chennai,india</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMobile />
                    <p>+91 820685013</p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <FaInstagram className="h-7 w-7" />
                    <FaLinkedin className="h-7 w-7" />
                    <FaFacebook className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-primaryColor text-white text-center'>
              <h3 className="py-3">@jemes Creation 2024</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
