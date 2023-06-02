import { Link } from 'react-router-dom';
import back_arrow from '../../assets/icons/back-arrow.png';

interface BackLinkProps {
  to: string;
}

const BackLink: React.FC<BackLinkProps> = ({ to }) => {
  return (
    <Link to={to} className="flex justify-center items-center w-[40px] h-[40px] rounded-[7px]  border border-[#5F6173]">
      <div>
        <img src={back_arrow} alt="back_arrow" />
      </div>
    </Link>
  );
};

export default BackLink;
