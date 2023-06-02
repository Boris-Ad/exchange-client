interface IconButtonProps {
  src: string;
}

const IconButton: React.FC<IconButtonProps> = ({ src }) => {
  return (
    <div className="w-[40px] h-[40px] border border-[#CACACA] rounded-[7px] flex justify-center items-center ">
      <img src={src} alt="src" />
    </div>
  );
};

export default IconButton;
