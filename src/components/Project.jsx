import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project--1.png";
import project2 from "../assets/images/project--2.png";
import project3 from "../assets/images/project--3.png";
import project4 from "../assets/images/project--4.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t, i18n } = useTranslation();
  // bunları yap
  // https://vuecountry05.netlify.app/
  // https://myreactflix.netlify.app/
  const projects = [
    {
      img: project1,
      name: "Fevzi Aslan Portfolio",
      github_link: "https://github.com/muhammedaslan11/fevziaslan",
      live_link: "https://www.fevziaslan.com.tr/",
    },
    {
      img: project2,
      name: "Sentiment Analyzer",
      github_link: "https://github.com/muhammedaslan11/sentiment-analyzer",
      live_link: "https://sentimentanalysisgl.netlify.app/",
    },
    {
      img: project3,
      name: "Simple Weather App",
      github_link: "https://github.com/muhammedaslan11/weather-app",
      live_link: "https://weather-app-bay-zeta.vercel.app/",
    },
    {
      img: project4,
      name: "Software Work Document",
      github_link: "https://github.com/muhammedaslan11/work-document",
      live_link: "https://work-document.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            controller={true}
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden h-[310px] rounded-xl overflow-hidden">
          <img
            className="max-h-full h-full object-cover"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--g1HuidbV--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4a6t7pmm323uaz9rv1rf.png"
            // src={project_person}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
