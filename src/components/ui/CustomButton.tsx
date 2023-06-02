interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <button className="w-full bg-[#6868FF] p-3 text-white text-[20px] font-medium rounded-xl" {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
