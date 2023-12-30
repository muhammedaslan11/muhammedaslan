import React from "react";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => {
  const footerMenus = [
    { name: "Anasayfa", link: "#home" },
    { name: "Hakkında", link: "#about" },
    { name: "Yetenek", link: "#skills" },
    { name: "Projeler", link: "#projects" },
    { name: "İletişim", link: "#contact" },
  ];
  const socialMediaİcons = [
    {
      iconName: "logo-instagram",
      hrefs: "https://www.instagram.com/muhammed_asln11",
    },
    // {
    //   iconName: "logo-facebook",
    //   hrefs: "https://www.facebook.com/profile.php?id=100011409362795",
    // },
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
  return (
    <section id="footer" className="footer">
      {/* ------------------------Style-----------------------------------  */}
      <style jsx>{`
        .footer {
          margin-top: 100px;
          position: relative;
          width: 100%;
          background: #3586ff;
          padding: 20px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .socialIcon,
        .menu {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          flex-wrap: wrap;
          padding-top: 20px;
        }

        .socialIconLink {
          font-size: 2rem;
          color: #fff;
          margin: 0 10px;
          display: inline-block;
          transition: 0.5s;
        }
        .socialIconLink:hover {
          transform: translateY(-10px);
        }

        .menuLink {
          font-size: 1.2rem;
          color: #fff;
          margin: 0 10px;
          display: inline-block;
          transition: 0.5s;
          opacity: 0.75;
          font-weight: 600;
        }

        .menuLink:hover {
          opacity: 1;
        }

        .footer p {
          color: #fff;
          margin: 15px 0 10px 0;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .wave {
          position: absolute;
          top: -70px;
          left: 0;
          width: 100%;
          height: 100px;
          // background-image: url("src/assets/images/wavebg.png");
          background-size: 1000px 100px;
        }

        .wave#wave1 {
          z-index: 600;
          opacity: 1;
          bottom: 0;
          animation: animateWaves 4s linear infinite;
        }

        .wave#wave2 {
          z-index: 899;
          opacity: 0.5;
          bottom: 10px;
          animation: animate 4s linear infinite !important;
        }

        .wave#wave3 {
          z-index: 700;
          opacity: 0.2;
          bottom: 15px;
          animation: animateWaves 3s linear infinite;
        }

        .wave#wave4 {
          z-index: 899;
          opacity: 0.7;
          bottom: 20px;
          animation: animate 3s linear infinite;
        }

        @keyframes animateWaves {
          0% {
            background-position-x: 1000px;
          }
          100% {
            background-positon-x: 0px;
          }
        }

        @keyframes animate {
          0% {
            background-position-x: -1000px;
          }
          100% {
            background-positon-x: 0px;
          }
        }
      `}</style>
      {/* ------------------------Style-----------------------------------  */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="socialIcon">
        <li className="social-icon__item">
          <a
            className="socialIconLink"
            href="https://www.instagram.com/muhammed_asln11"
          >
            <IconBrandInstagram size="2.3rem" name="logo-instagram" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="socialIconLink"
            href="https://twitter.com/Muhamme47611687"
          >
            <IconBrandTwitterFilled size="2.3rem" name="logo-twitter" />
          </a>
        </li>
        {/*         <li className="social-icon__item">
          <a
            className="socialIconLink"
            href="https://www.facebook.com/profile.php?id=100011409362795"
          >
            <IconBrandFacebookFilled size="2.3rem" name="logo-facebook" />
          </a>
        </li> */}
        <li className="social-icon__item">
          <a
            className="socialIconLink"
            href="https://www.linkedin.com/in/muhammed-aslan-66269025a"
          >
            <IconBrandLinkedin size="2.3rem" name="logo-linkedin" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="socialIconLink"
            href="https://github.com/muhammedaslan11"
          >
            <IconBrandGithub size="2.3rem" name="logo-linkedin" />
          </a>
        </li>
      </ul>
      <ul className="menu">
        {footerMenus?.map((menuItems, key) => (
          <li className="menu__itemm">
            <a className="menuLink" href={menuItems.link}>
              {menuItems.name}
            </a>
          </li>
        ))}
      </ul>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://www.muhammedaslan.com.tr/">
          <strong>Muhammed Aslan</strong>
        </a>{" "}
        Tüm Hakları Saklıdır.
      </p>
    </section>
  );
};

export default Footer;
