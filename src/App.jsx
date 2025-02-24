import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseUrl, db } from "./lib/db";
import { Icon } from "./components/icons";
import { TypeAnimation } from "react-type-animation";
import { cn } from './hooks/utils';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [lang, setLang] = useState(searchParams.get("lang") || "en");
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(null);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    searchParams.set("lang", newLang);
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  useEffect(() => {
    const fetchRecord = async () => {
      setLoading(true);
      try {
        db.autoCancellation(false);
        const fetchedSettings = await db
          .collection("Muhammed_Settings")
          .getOne(lang === 'en' ? 'ziasqcr2c3k6fmt' : 'd9z6ux9m5jd1xeh');
        setSettings(fetchedSettings);
      } catch (error) {
        console.error("Error fetching record:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchRecord();
    }, 1000);

    return () => clearTimeout(timer);
  }, [lang]);

  const Container = ({ children, className = "" }) => {
    return (
      <div className={`w-full h-auto mx-auto md:max-w-screen-2xl overflow-x-hidden ${className}`}>
        {children}
      </div>
    );
  };

  const Header = ({ settings }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
      const overflowStyle = isMenuOpen ? "hidden" : "unset";
      document.body.style.overflow = overflowStyle;

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isMenuOpen]);

    return (
      <Container>
        <header className="px-4 h-auto py-3 sticky top-0 inset-x-0 w-full transition-all duration-300 bg-transparent border-b z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <picture>
                  <img
                    src={`${baseUrl}${settings?.values?.logo}`}
                    alt={settings?.values?.logo}
                    width={80}
                    height={80}
                  />
                </picture>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="flex items-center p-2 focus:outline-none"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-8">
                {settings?.values?.links?.map((menu, i) => (
                  <li key={i}>
                    <a
                      target={menu.target || ""}
                      href={menu.href}
                      className="text-xl font-medium opacity-60 hover:opacity-100 transition-all"
                    >
                      /{menu.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div
            className={cn(
              'menu-parent md:hidden text-gray-900 z-50 fixed w-full h-screen flex flex-col gap-10 px-7 py-2 font-medium duration-300 top-28 bg-black bg-opacity-50 backdrop-blur-md',
              {
                'left-0': isMenuOpen,
                'left-[-100%]': !isMenuOpen,
              }
            )}
          >
            <div className="w-full mt-16 rounded-2xl text-center"></div>
            <ul className="flex flex-col justify-center items-center gap-6 text-lg">
              {settings?.values?.links?.map((menu, i) => (
                <li key={i} className="hover:text-cyan-600 flex items-center gap-1">
                  <a
                    href={menu.href}
                    className="font-bold text-white text-xl"
                    target={menu.target || ""}
                  >
                    /{menu.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-white text-center">
              © {new Date().getFullYear()} {settings?.values?.info?.fullName} | Powered by{' '}
              <strong>{settings?.values?.alphaAslan?.name}</strong>
            </p>
          </div>
        </header>
      </Container>
    );
  };

  const Hero = ({ settings }) => {
    return (
      <Container className="p-11">
        <div className="flex flex-col-reverse sm:flex-row gap-10">
          <div className="flex-1 text-center sm:text-left">
            <div className="text-white text-4xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              <span className="text-white">
                {settings?.values?.translations?.hello}, {settings?.values?.translations?.ıam} {settings?.values?.info?.name}
              </span>
            </div>
            <div className="text-2xl font-bold mt-4 text-gray-200">
              <TypeAnimation
                sequence={settings?.values?.animationTexts || [""]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 text-base sm:text-lg mt-6">
              {settings?.values?.translations?.slogan}
            </p>
            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              {settings?.values?.socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target={social.target || ""}
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 w-full max-w-xs"
                >
                  <Icon iconName={social.name} color="#fff" />
                  <span className="text-sm font-medium">{social.userName}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="rounded-md bg-gradient-to-r from-primary-500 via-secondary-500 to-secondary-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <img
                src={`${baseUrl}${settings?.values?.heroImage}`}
                alt={`${settings?.values?.info?.fullName}`}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    );
  };

  const Footer = ({ settings }) => {
    return (
      <Container>
        <footer className="border-t py-8 px-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={`${baseUrl}${settings?.values?.logo}`}
                alt={settings?.values?.logo}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 rounded border ${lang === 'en'
                  ? 'bg-white text-black border-black'
                  : 'bg-black text-white'
                  } transition-all`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("tr")}
                className={`px-4 py-2 rounded border ${lang === 'tr'
                  ? 'bg-white text-black border-black'
                  : 'bg-black text-white'
                  } transition-all`}
              >
                TR
              </button>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} {settings?.values?.info?.fullName} |
            Powered by <a target="_blank" href={settings?.values?.alphaAslan?.link}>
              <strong>{settings?.values?.alphaAslan?.name}</strong>
            </a>
          </p>
        </footer>
      </Container>
    );
  };

  const Loader = () => {
    return (
      <Container className="flex justify-center items-center w-screen h-screen">
        <div className="loader w-fit text-2xl md:text-[40px] font-bold uppercase text-[#0000]" />
      </Container>
    );
  }

  if (loading) {
    return <Loader />;
  }


  return (
    <Container>
      <Header settings={settings} />
      <Hero settings={settings} />
      <Footer settings={settings} />
    </Container>
  );
};

export default App;
