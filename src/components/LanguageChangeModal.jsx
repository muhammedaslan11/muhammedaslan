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

  const handleOutsideClick = (e) => {
    if (LangModalOpen && e.target.classList.contains("language-modal")) {
      setLangModalOpen(false);
    }
  };
  return (
    <div className="language-modal-parent bg-gray-800">
      <div className="language-modal">
        <div className="text-base">Which Language Do You Prefer?</div>
        <div className="text-base">Hangi Dili Tercih Edersiniz?</div>
        <button
          onClick={() => {
            i18n.changeLanguage("tr");
            setLangModalOpen(!LangModalOpen);
          }}
        >
          {" "}
          <div>
            <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg" />
          </div>
          Turkish
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            setLangModalOpen(!LangModalOpen);
          }}
        >
          <div>
            <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg" />
          </div>
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageChangeModal;
