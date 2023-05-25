import { useNavigate } from "react-router-dom";

const LinkButton = ({ title, url }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <button onClick={handleClick} className="slideOption">
      {title}
    </button>
  );
};

export default LinkButton;
