interface skillProps {
  name: string;
  Icon: any;
}
const Skill: React.FC<skillProps> = (props) => {
  const Icon = props.Icon;
  return (
    <div className="w-full max-md:py-5 cursor-default hover:bg-primary hover:text-background transition py-10 rounded-[10px] bg-light_card">
      <div className="m-auto text-[60px] max-[800px]:text-[40px] text-center flex justify-center items-center">
        <Icon />
      </div>
      <div>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Skill;
