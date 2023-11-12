import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";
import MyImage from "../assets/myimage.jpg";
const PersonalInfo = () => {
  return (
    <section
      id="about"
      className="mt-24 max-sm:mt-10 max-sm:flex-col flex m-auto justify-center items-center gap-10"
    >
      <div className="h-48 transition relative w-48 rounded-full flex items-center justify-center overflow-hidden border-[3px] outline  border-background">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-background hover:opacity-30 opacity-0 transition">
        </div>
        <img src={MyImage} className="h-full w-full" alt="my Image" />
      </div>
      <div className="flex flex-col text-left max-sm:text-center max-sm:items-center max-sm:gap-6 max-sm:mt-5">
        <h1 className="w-[372px] text-[#F1F2F4] text-[46px] not-italic font-medium leading-[normal]">
          Alireza Shafaee
        </h1>
        <span className="text-[22px] leading-[normal] pl-1">
          Software Engineer
        </span>
        <div className="flex items-center space-x-8 mt-3 pl-1 text-[28px]">
          <a
            href="https://github.com/ailrezashafaee"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsGithub />
          </a>
          <a
            href="https://linkedin.com/in/alireza-shafaee/"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/alireza.sh.ph/"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsInstagram />
          </a>
          <a
            href="https://t.me/Alireza_shfq"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsTelegram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
