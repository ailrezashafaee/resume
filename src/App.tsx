import "./App.css";
import { useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import PersonalInfo from "./components/personal";
import Skill from "./components/skill";
import { SkillsConfig } from "./config/skills";
import { SoftwareSkills } from "./config/software";
import Experience from "./components/experence";
import { WorkExperience } from "./config/Experience";
function App() {
  const [tab, setTab] = useState(0);
  const [list, setList] = useState(SkillsConfig);
  return (
    <>
      <PersonalInfo />
      <section className="flex cursor-default m-auto mt-12 py-5 w-[634px] justify-center items-center ">
        <div className="flex items-center flex-col m-auto text-2xl">
          <h4>
            3+
          </h4>
          <span>
            Years of work experience
          </span>
        </div>
        <div className="flex items-center flex-col m-auto text-2xl">
          <h4>
            15+
          </h4>
          <span>
            Completed projects
          </span>
        </div>
        <div className="flex items-center flex-col m-auto text-2xl">
          <h4>
            95%
          </h4>
          <span>
            Satisfied customers
          </span>
        </div>
      </section>
      <section className="flex mt-12 text-[22px] items-center justify-center gap-9">
        <button className="h-20 hover:bg-light_card hover:text-primary transition text-center justify-center text-background font-medium w-[290px] flex items-center space-x-3 rounded-[10px] bg-primary">
          <span>Download CV</span>
          <TfiDownload />
        </button>
        <button className="h-20 hover:bg-gray hover:text-background transition hover:opacity-50 text-center justify-center font-medium w-[290px] flex items-center space-x-3 rounded-[10px] bg-light_card">
          <span>Contact Me</span>
        </button>
      </section>
      <section className="w-[756px] m-auto mt-32 text-[22px] font-medium">
        <h1 className="text-center text-[#F1F2F4] text-[46px] mb-3">
          About me
        </h1>
        <div>
         <p>
            Hi, I am Alireza, a front-end developer based in Tehran. I have a great foundation in computer science and problem solving. I like to find new things and combine them together. I kept myself busy learning about new designs and systems,as currently I'm learning more about PWA and NextJS. I also love coding in neovim and I like to customize everything how I like. Let's talk if you're interested in, but don't forget to bring coffee:)
          </p>   
        </div>
      </section>
      <section className="w-[756px] m-auto mt-32 text-[22px] font-medium">
        <h1 className="text-center text-[#F1F2F4] text-[46px] mb-3">
          Skills
        </h1>
        <div className="w-full bg-light_card py-4 flex px-6 items-center justify-center rounded-[20px]">
          <button
            onClick={() => {
              setTab(0);
              setList(SkillsConfig);
            }}
            className={`rounded-[10px] transition h-20 w-full bg-${
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
            className={`rounded-[10px] transition h-20 w-full bg-${
              tab === 1 ? "background" : ""
            }`}
          >
            Software
          </button>
        </div>
        <div className="grid grid-cols-3 w-full mt-8 gap-x-8 gap-y-8">
          {list.map((value, index) => {
            return <Skill name={value.name} Icon={value.Icon} key={index} />;
          })}
        </div>
      </section>
      <section className="mt-12 w-10/12 m-auto text-[22px] items-center justify-center gap-9">
        <h1 className="text-center text-[#F1F2F4] text-[46px] mb-3">
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
    </>
  );
}

export default App;
