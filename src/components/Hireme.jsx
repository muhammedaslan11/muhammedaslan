import React from "react";
import hireMe from "../assets/images/hireme3.jpg";
import { useTranslation } from "react-i18next";

const Hireme = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Herhangi Bir İşin Var Mı?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center overflow-hidden">
        <div>
          <h2 className="text-2xl font-semibold">
            Benimle Çalışmak İster Misin?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Kullanıcı dostu arayüzlerin ardındaki gizli gücü keşfetmeye tutkulu
            bir Frontend Geliştiriciyim. Kodun estetiği ve kullanıcı deneyiminin
            mükemmelliği benim için sadece bir hedef değil, aynı zamanda bir
            taahhüttür. Web dünyasında benzersiz ve etkileyici deneyimler
            yaratmak için teknik becerilerimi ve tasarım yeteneklerimi
            birleştirerek projelerime değer katıyorum.
          </p>
          <a href="https://wa.me/+905357631908" target="_blank">
            <button className="btn-primary mt-10">Merhaba De! </button>
          </a>
        </div>
        <div
          className={`overflow-hidden bg-yellow-400 rounded-3xl ${
            window.innerWidth > 1024 ? "w-[40%]" : ""
          }`}
        >
          <img
            src={hireMe}
            alt=""
            className={`object-center h-full max-h-[300px]`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
