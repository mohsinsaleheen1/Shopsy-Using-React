import React from "react";
import FooterImg from "../images/Footer/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
const BannerImage = {
  backgroundImage: `url(${FooterImg})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];
function Footer() {
  return (
    <div style={BannerImage} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="uppercase sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap3">
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              sit aut suscipit excepturi autem natus?
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-4">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-4">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social links */}
            <div>
              <div className="flex items-center gap-3 mt-8">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
