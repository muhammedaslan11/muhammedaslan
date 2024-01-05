import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageChangeModal = ({ LangModalOpen, setLangModalOpen }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const bodyOverflow = () => {
      document.body.style.overflow = LangModalOpen ? "hidden" : "auto";
    };
    bodyOverflow();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [LangModalOpen]);

  const isOutsideModal = (e) => {
    if (LangModalOpen && e.target.classList.contains("language-modal")) {
      setLangModalOpen(false);
    }
  };
  return (
    <div
      className="language-modal-parent bg-gray-800 fixed top-0 left-0 z-[999] 
    flex justify-center items-center w-full h-full bg-transparent text-center"
      onClick={isOutsideModal}
    >
      <div
        className="language-modal flex flex-col p-4 bg-blue-600
         rounded-lg max-w-xs z-[99] before:content-['']
       before:bg-black before:z-[-1] before:top-0 before:left-0 before:w-screen 
         before:h-screen before:absolute before:opacity-60 before:transition-all"
      >
        <div className="text-base">Which Language Do You Prefer?</div>
        <div className="text-base py-1">Hangi Dili Tercih Edersiniz?</div>
        <button
          className="font-extrabold uppercase cursor-pointer flex justify-center items-center text-[21px] 
          gap-4 hover:scale-[1.1] hover:bg-zinc-500	 hover:transition-all"
          onClick={() => {
            i18n.changeLanguage("tr");
            setLangModalOpen(!LangModalOpen);
          }}
        >
          {" "}
          <div>
            <img
              className="w-14 inline"
              src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"
            />
          </div>
          Turkish
        </button>
        <button
          className="font-extrabold uppercase cursor-pointer flex justify-center items-center text-[21px] 
          gap-4 hover:scale-[1.1] hover:bg-zinc-500	 hover:transition-all"
          onClick={() => {
            i18n.changeLanguage("en");
            setLangModalOpen(!LangModalOpen);
          }}
        >
          <div>
            <img
              className="w-14 inline"
              src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
            />
          </div>
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageChangeModal;
