import React from "react";
import hero from "../assets/images/lion2.png";
import hero2 from "../assets/images/lion3.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      href: "https://www.instagram.com/muhammed_asln11",
    },
    // {
    //   icon: "logo-facebook",
    //   href: "https://www.facebook.com/profile.php?id=100011409362795",
    // },
    {
      icon: "logo-linkedin",
      href: "https://www.linkedin.com/in/muhammed-aslan-66269025a",
    },
    {
      icon: "logo-twitter",
      href: "https://twitter.com/Muhamme47611687",
    },
    {
      icon: "logo-github",
      href: "https://github.com/muhammedaslan11",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center shadow-black shadow-2xl">
        <img
          src={window.innerWidth < 640 ? hero : hero2}
          alt=""
          className="md:w-11/12 object-center"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              <TypeAnimation
                sequence={["Hello!", 700, "", 700]}
                className="text-3xl"
                repeat={Infinity}
              />
              <br />
            </span>
            <TypeAnimation
              sequence={["I'm Muhammed Aslan!", 700, "", 700]}
              className="text-3xl"
              repeat={Infinity}
            />
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer 👨🏻‍💻
          </h4>
          <a href="mailto:aslanmuhammed2534@gmail.com">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social, index) => (
              <div
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={social.href} target="_blank">
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
