const Modal: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="fixed h-screen w-screen  bg-red-300 top-0 z-40 ">
      <img alt="opened image" src={image} />
    </div>
  );
};
export default Modal;
