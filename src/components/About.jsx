import React from "react";
import CountUp from "react-countup";
import aboutImg from "../assets/images/about-image.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  const info = [
    { text: t("monthExperience"), count: "17" },
    { text: t("completedProjects"), count: "8" },
    { text: t("companiesWork"), count: "1" },
  ];
  return (
    <section id="about" className="py-2 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold text-cyan-600">{t("aboutMe")}</h3>
        <p className="my-1 text-gray-400 text-lg">{t("explanation")}</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-left text-lg leading-7 w-11/12 mx-auto">
                {t("explanationDesc")}
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
                // href="https://drive.google.com/file/d/1WxWfnnlEUzidV_AEQiobXGdSxldcIOu7/view?usp=drive_link"
                href="https://www.muhammedaslan.com.tr/Muhammed-Aslan-CV.pdf"
                target="_blank"
                className="float-left bg-sky-600 p-3 rounded-3xl"
              >
                <span style={{ color: "white" }}>{t("viewCv")}</span>
              </a>
              {/* <a
                href="./src/assets/Muhammed-Aslan-CV.pdf"
                type="application/pdf"
                className="float-left bg-sky-600 p-3 rounded-3xl"
                download
              >
                <span style={{ color: "white" }}>CV İndir</span>
              </a> */}
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
