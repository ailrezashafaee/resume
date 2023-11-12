import Tag from "./tag";

interface ExperienceProps {
  label: string;
  body: string;
  tags: string[];
  year: string;
}
const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className="ml-40 max-md:w-full max-md:ml-0 ">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-primary relative max-md:flex max-md:flex-wrap max-md:items-center max-md:justify-between max-md:w-full font-medium text-2xl max-md:text-xl">
          <div className="absolute flex space-x-16 max-md:hidden top-1 items-center -left-48">
            <span className="italic  text-lg font-normal text-gray">
              {props.year}
            </span>
            <div className="w-6 h-6 bg-transparent border-4 border-primary rounded-full">
            </div>
          </div>
          {props.label}
          <span className="hidden max-md:block max-md:text-[13px]  italic text-lg font-normal text-gray">
            {props.year}
          </span>
        </h4>
      </div>
      <p className="leading-10 pr-10 text-left max-md:text-justify max-lg:pr-3">
        {props.body}
      </p>
      <div className="flex gap-x-3 flex-wrap max-lg:justify-start gap-y-4 justify-start mt-3">
        {props.tags.map((value, index) => <Tag name={value} key={index} />)}
      </div>
    </div>
  );
};

export default Experience;
