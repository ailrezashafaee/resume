interface inputProps {
  placeholder: string;
  type: string;
}
const Input: React.FC<inputProps> = (props) => {
  return (
    <div>
      <input type={props.type} />
    </div>
  );
};

export default Input;
