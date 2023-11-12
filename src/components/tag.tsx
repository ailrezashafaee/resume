interface TagProps {
  name: string;
}
const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <div className="max-lg:text-lg bg-light_card hover:bg-primary_hover hover:text-background cursor-pointer text-gray font-medium rounded-[10px] px-4 py-1">
      {name}
    </div>
  );
};

export default Tag;
