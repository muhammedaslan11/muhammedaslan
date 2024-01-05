import React from "react";

const Bot = ({ LangModalOpen, setLangModalOpen }) => {
  return (
    <>
      <a
        // href="tel:+905357631908"
        // href="whatsapp://send?abid=+905357631908&text=Hello%2C%20World!"
        href="https://wa.me/+905357631908"
        target="_blank"
        className="fixed bottom-5 sm:right-8 right-4 z-[998] cursor-pointer text-white text-4xl bg-green-500 p-2 flex items-center justify-center rounded-full animate-bounce"
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
      <div
        onClick={() => setLangModalOpen(!LangModalOpen)}
        className="fixed bottom-24 sm:right-8 right-4 z-[998] cursor-pointer text-white text-4xl bg-blue-600 p-2 flex items-center justify-center rounded-full animate-bounce"
      >
        <ion-icon size="large" name="language-outline"></ion-icon>
      </div>
      {/* <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-24 sm:right-8 right-4 z-[998] cursor-pointer text-white text-4xl bg-cyan-600 p-2 flex items-center justify-center rounded-full animate-bounce"
      >
        <ion-icon name="arrow-up-outline"></ion-icon>
      </div> */}
    </>
  );
};

export default Bot;
