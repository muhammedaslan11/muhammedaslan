import React from "react";
import hero from "../assets/images/lion2.png";
import Typed from "react-typed";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      href: "https://www.instagram.com/muhammed_asln11",
    },
    {
      icon: "logo-facebook",
      href: "https://www.facebook.com/profile.php?id=100011409362795",
    },
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
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              <Typed strings={["Hello!"]} typeSpeed={50} backSpeed={200} loop />
              <br />
            </span>
            <Typed
              className="text-3xl"
              strings={["I'm Muhammed Aslan"]}
              typeSpeed={100}
              backSpeed={100}
              loop
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
