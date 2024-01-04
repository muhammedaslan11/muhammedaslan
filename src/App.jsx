import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import LanguageChangeModal from "./components/LanguageChangeModal";
import "./i18n";

const App = () => {
  const [LangModalOpen, setLangModalOpen] = useState(true);
  return (
    <div>
      <Navbar
        LangModalOpen={LangModalOpen}
        setLangModalOpen={setLangModalOpen}
      />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      {/* <Contact /> */}
      <Footer
        LangModalOpen={LangModalOpen}
        setLangModalOpen={setLangModalOpen}
      />
      {LangModalOpen && (
        <LanguageChangeModal
          LangModalOpen={LangModalOpen}
          setLangModalOpen={setLangModalOpen}
        />
      )}
    </div>
  );
};

export default App;
