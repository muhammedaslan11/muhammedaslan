import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const menuLinks = [
    { name: t("homepage"), link: "#home", icon: "home-outline" },
    { name: t("about"), link: "#about", icon: "information-circle-outline" },
    { name: t("skill"), link: "#skills", icon: "trophy-outline" },
    { name: t("projects"), link: "#projects", icon: "code-slash-outline" },
    // { name: t("contacts"), link: "#contact", icon: "call-outline" },
  ];

  const socialMediaİcons = [
    {
      iconName: "logo-instagram",
      hrefs: "https://www.instagram.com/muhammed_asln11",
    },
    {
      iconName: "logo-facebook",
      hrefs: "https://www.facebook.com/profile.php?id=100011409362795",
    },
    {
      iconName: "logo-linkedin",
      hrefs: "https://www.linkedin.com/in/muhammed-aslan-66269025a",
    },
    {
      iconName: "logo-twitter",
      hrefs: "https://twitter.com/Muhamme47611687",
    },
    {
      iconName: "logo-github",
      hrefs: "https://github.com/muhammedaslan11",
    },
  ];
  useEffect(() => {
    const bodyOverflow = () => {
      document.body.style.overflow = open ? "hidden" : "auto";
    };
    bodyOverflow();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const isOutsideMenu = (e) => {
    if (open && e.target.closest(".menu-parent") === null) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      isOutsideMenu(e);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <style jsx>
        {`
          ion-icon {
            color: #fff;
          }
        `}
      </style>
      <div className="flex items-center justify-between cursor-pointer">
        <div
          className="mx-7"
          onClick={() => {
            window.location.href = "/";
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <h4 className="text-2xl uppercase font-bold">
            {"<Mu"}
            <span className="text-cyan-600">ham</span>
            {"med"}
            <br />
            <div className="flex justify-end">
              <span className="text-cyan-600">Asl</span>
              {"an/>"}
            </div>
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg uppercase">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          {open === true ? (
            <ion-icon name="close-sharp" />
          ) : (
            <ion-icon name="menu" />
          )}
        </div>
        <div
          className={`menu-parent md:hidden text-gray-900 absolute w-3/4 h-screen flex flex-col gap-10
          px-7 py-2 font-medium backdrop-blur-md  top-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="w-full mt-16 rounded-2xl text-center">
            <h4 className="text-2xl text-white uppercase font-bold">
              {"<Muhammed"}
              <br />
              {"Aslan/>"}
            </h4>
          </div>
          <ul className="flex flex-col justify-center gap-6 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600 flex items-center gap-1"
              >
                <ion-icon name={menu?.icon} />
                <a className="font-bold text-white" href={menu?.link}>
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex justify-around">
            {socialMediaİcons?.map((icon, i) => (
              <li key={i}>
                <a target="_blank" rel="noreferrer" href={icon?.hrefs}>
                  <ion-icon size="large" name={icon?.iconName} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} All right reserved by {"   "}
            <a href="https://muhammed-aslan11.com.tr">
              <strong>Muhammed Aslan</strong>
            </a>
          </p>
          <button
            className="language-btn text-white flex justify-center items-center gap-4 text-3xl"
            onClick={() => {
              i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
            }}
          >
            <ion-icon size="large" name="language-outline"></ion-icon>
            <div
              className="flex items-center justify-center uppercase"
              onClick={() => {
                // setOpen(false);
              }}
            >
              {/* Burada t("flag") fonksiyonunun işlevini yerine getirmesi gerekiyor */}
              <img className="w-14" src={t("flag")} alt="Language Flag" />
              <b>{i18n.language === "tr" ? "Turkish" : "English"}</b>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
