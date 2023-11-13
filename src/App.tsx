import "./App.css";
import { useRef, useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import PersonalInfo from "./components/personal";
import Skill from "./components/skill";
import { SkillsConfig } from "./config/skills";
import { SoftwareSkills } from "./config/software";
import Experience from "./components/experence";
import { WorkExperience } from "./config/Experience";
import Project from "./components/project";
import PROJECTS from "./config/Projects";
import { AiFillMessage } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import MyResume from "./assets/AlirezaShafaee.pdf";
function App() {
  const [tab, setTab] = useState(0);
  const [list, setList] = useState(SkillsConfig);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_05m9jhi",
      "template_uuy6t1m",
      form.current!,
      "cVRqWLnfimA1uR3CG",
    )
      .then((_) => {
        setActive({ active: 1, message: "Success, Thanks for your message!" });
        setTimeout(() => {
          setActive({
            active: 0,
            message: "Success, Thanks for your message!",
          });
        }, 5000);
      }, (_) => {
        setActive({ active: 1, message: "Failed! Please send again." });
        setTimeout(() => {
          setActive({ active: 0, message: "Failed! Please send again." });
        }, 5000);
      });
  };
  const [active, setActive] = useState({ active: 0, message: "" });
  return (
    <>
      <header className=" z-50 w-full m-auto max-sm:hidden max-md:py-3 flex sticky -top-1.5 items-center justify-center text-xl py-6">
        <div className="hover:opacity-90 transition bg-light_card opacity-60 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className="w-1/2 max-sm:11/12 max-lg:w-8/12 max-md:w-10/12 max-sm:text-lg flex items-center relative z-40 justify-between m-auto">
          <a href="#about" className=" hover:text-white">About Me</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Work Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact Us</a>
        </div>
      </header>
      <PersonalInfo />
      <section className="flex cursor-default m-auto mt-12 py-5 w-[634px] max-sm:11/12 max-[450px]:flex-col max-[450px]:gap-y-4 max-md:w-10/12 justify-center items-center ">
        <div className="flex items-center flex-col m-auto max-sm:text-xl text-2xl">
          <h4>
            3+
          </h4>
          <span>
            Years of work experience
          </span>
        </div>
        <div className="flex items-center flex-col m-auto max-sm:text-xl text-2xl">
          <h4>
            15+
          </h4>
          <span>
            Completed projects
          </span>
        </div>
        <div className="flex items-center flex-col m-auto max-sm:text-xl text-2xl">
          <h4>
            95%
          </h4>
          <span>
            Satisfied customers
          </span>
        </div>
      </section>
      <section className="flex mt-12 text-[22px] items-center justify-center gap-9 max-md:flex-col">
        <a
          href={MyResume}
          download="AlirezaShafaee.pdf"
          target="_blank"
          className="h-20 hover:bg-light_card hover:text-primary transition text-center justify-center text-background font-medium w-[290px] flex items-center space-x-3 rounded-[10px] bg-primary"
        >
          <span>Download CV</span>
          <TfiDownload />
        </a>
        <a
          href="#contact"
          className="cursor-pointer h-20 hover:bg-gray hover:text-background transition hover:opacity-50 text-center justify-center font-medium w-[290px] flex items-center space-x-3 rounded-[10px] bg-light_card"
        >
          <span>Contact Me</span>
        </a>
      </section>
      <section className="w-[756px] m-auto mt-32 text-[22px] font-medium max-md:w-10/12">
        <h1 className="text-center text-[#F1F2F4] text-[46px] max-md:text-[36px] mb-3">
          About me
        </h1>
        <div>
          <p>
            Hi, I am Alireza, a front-end developer based in Tehran. I have a
            great foundation in computer science and problem solving. I like to
            find new things and combine them together. I kept myself busy
            learning about new designs and systems,as currently I'm learning
            more about PWA and NextJS. I also love coding in neovim and I like
            to customize everything how I like. Let's talk if you're interested
            in.
          </p>
        </div>
      </section>
      <section
        id="skills"
        className="w-[756px] max-[800px]:w-10/12 m-auto mt-32 text-[22px] font-medium"
      >
        <h1 className="text-center text-[#F1F2F4] text-[46px] max-md:text-[36px] mb-3">
          Skills
        </h1>
        <div className="w-full max-md:px-4 max-md:py-3 bg-light_card py-4 flex px-6 items-center justify-center rounded-[20px]">
          <button
            onClick={() => {
              setTab(0);
              setList(SkillsConfig);
            }}
            className={`rounded-[10px] transition h-20 max-md:h-16 max-md:text-lg w-full bg-${
              tab === 0 ? "background" : ""
            }`}
          >
            FrontEnd
          </button>
          <button
            onClick={() => {
              setTab(1);
              setList(SoftwareSkills);
            }}
            className={`rounded-[10px] transition h-20 max-md:h-16 max-md:text-lg w-full bg-${
              tab === 1 ? "background" : ""
            }`}
          >
            Software
          </button>
        </div>
        <div className="grid grid-cols-3 w-full mt-8 max-md:grid-cols-2 max-md:gap-6 max-md:text-lg gap-x-8 gap-y-8">
          {list.map((value, index) => {
            return <Skill name={value.name} Icon={value.Icon} key={index} />;
          })}
        </div>
      </section>

      <section
        id="experience"
        className="max-w-[1280px] max-lg:w-10/12 mt-12 w-7/12 m-auto max-md:text-[18px] text-[22px] items-center justify-center gap-9"
      >
        <h1 className="text-center text-[#F1F2F4] text-[46px] max-md:text-[36px] mb-3">
          Work Experience
        </h1>
        <div className="space-y-12">
          {WorkExperience.map((value, index) => (
            <Experience
              key={index}
              label={value.label}
              body={value.body}
              year={value.year}
              tags={value.tags}
            />
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="mt-20 w-7/12 m-auto max-[1100px]:w-10/12 text-[22px] items-center justify-center gap-9"
      >
        <h1 className="text-center text-[#F1F2F4] max-md:text-[36px] text-[46px] mb-3">
          Projects
        </h1>
        <div className="flex flex-col space-y-6">
          {PROJECTS.map((value, index) => <Project {...value} key={index} />)}
        </div>
      </section>
      <section
        id="contact"
        className="mt-40 max-lg:w-8/12 max-md:w-10/12 w-6/12 m-auto text-[22px]  items-center justify-center gap-9"
      >
        <h1 className="text-center text-[#F1F2F4] text-[46px] max-md:text-[36px] mb-3">
          Contact Us
        </h1>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col items-start"
        >
          <label htmlFor="name" className="pl-4 my-2 font-bold">Name</label>
          <div className="rounded-xl bg-light_card mb-4 w-full border-2 border-gray hover:border-primary transition flex items-center justify-start py-2 px-6">
            <input
              name="name"
              type="text"
              placeholder="Your full name..."
              className="bg-transparent w-full placeholder:text-text focus:outline-none "
              required
            />
          </div>
          <label htmlFor="email" className="pl-4 my-2 font-bold">Email</label>
          <div className="rounded-xl bg-light_card mb-4 w-full border-2 border-gray hover:border-primary transition flex items-center justify-start py-2 px-6">
            <input
              name="email"
              type="text"
              placeholder="example@mail.com"
              className="bg-transparent w-full placeholder:text-text focus:outline-none "
              required
            />
          </div>
          <label htmlFor="message" className="pl-4 my-2 font-bold">
            Message
          </label>
          <div className="rounded-xl bg-light_card w-full border-2 border-gray hover:border-primary transition flex items-center justify-start py-2 px-6">
            <textarea
              name="message"
              placeholder="Type here..."
              rows={7}
              className="bg-transparent w-full placeholder:text-text focus:outline-none "
              required
            />
          </div>
          <button
            type="submit"
            className="h-14 hover:bg-light_card hover:text-primary transition text-center justify-center text-background font-medium w-[240px] flex text-xl items-center mt-6 space-x-3 rounded-[10px] bg-primary"
          >
            <span>Send Message</span>
            <AiFillMessage className="text-2xl" />
          </button>
          {
            <div
              className={`mt-6 py-3 px-10 rounded-xl bg-light_card opacity-0 text-xl transition font-bold ${
                active.active === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              {active.message}
            </div>
          }
        </form>
      </section>
      <footer className="w-full bg-light_card">
        <div className="">
          <small>&copy; Made by Alireza.</small>
        </div>
      </footer>
    </>
  );
}

export default App;
