import arrow_down from "../../assets/icons/arrow-down.png";

interface SelectButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  rotate?: boolean;
}

const SelectButton: React.FC<SelectButtonProps> = ({ children, rotate = false, ...props }) => {
  return (
    <button {...props} className="flex items-center gap-4 text-white select-none">
      <span className=" font-[Inter] text-lg font-medium">{children}</span>
      <div>
        <img
          src={arrow_down}
          alt="arrow_down"
          className={`${rotate ? "rotate-180" : "rotate-0"} transition-transform`}
        />
      </div>
    </button>
  );
};

export default SelectButton;
