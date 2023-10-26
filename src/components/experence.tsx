import Tag from "./tag";

interface ExperienceProps {
  label: string;
  body: string;
  tags: string[];
  year: string;
}
const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className="ml-40">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-primary relative font-medium text-2xl">
          <div className="absolute flex space-x-16 top-1 items-center -left-48">
            <span className="italic text-lg font-normal text-gray">
              {props.year}
            </span>
            <div className="w-6 h-6 bg-transparent border-4 border-primary rounded-full">
            </div>
          </div>
          {props.label}
        </h4>
      </div>
      <p className="leading-10 pr-10 text-left">
        {props.body}
      </p>
      <div className="flex space-x-3 justify-end mt-3">
        {props.tags.map((value, index) => <Tag name={value} key={index} />)}
      </div>
    </div>
  );
};

export default Experience;
