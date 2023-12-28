import React from "react";
import CountUp from "react-countup";
import aboutImg from "../assets/images/hacker.png";
const About = () => {
  const info = [
    { text: "Months experience", count: "17" },
    { text: "Completed Projects", count: "8" },
    { text: "Companies Work", count: "1" },
  ];
  return (
    <section id="about" className="py-2 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Benim <span className="text-cyan-600">Hakkımda</span>
        </h3>
        <p className="text-gray-400 my-1 text-lg">Tanıtım</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify text-lg leading-7 w-11/12 mx-auto">
                HTML, CSS, JavaScript, React, Bootstrap, TailwindCSS ve
                TypeScript gibi modern web teknolojilerinde güçlü bir bilgi
                birikimine sahibim. Kreatif çözümler üretme konusundaki tutkum
                ve hızla değişen teknolojik ortama ayak uydurma yeteneğimle,
                kullanıcı dostu ve etkileyici web uygulamaları geliştirmekteyim.
                Profesyonel gelişimime odaklı, yaratıcı ve çözüm odaklı bir
                Frontend Geliştirici olarak sizinle çalışmayı heyecanla
                bekliyorum.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <CountUp
                      className="md:text-[50px] text-[35px] font-semibold text-white"
                      duration={5}
                      end={content.count}
                    />
                    <span className="text-cyan-60 text-[40px]">+</span> <br />
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="./src/assets/Muhammed-Aslan.pdf"
                className="float-left bg-sky-600 p-3 rounded-3xl"
                download
              >
                <span style={{ color: "white" }}>CV İndir</span>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
