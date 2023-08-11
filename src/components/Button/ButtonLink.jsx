import { Link } from "react-router-dom";
import { ButtonSize, ButtonVariant } from "./ButtonStyle";

const Button = ({ size, variant = "", children, to }) => {
  const style = {
    link: `px-[15px] py-[10px] rounded-[10px] flex items-center justify-center font-inter font-semibold 
    ${ButtonVariant[variant]} 
    ${ButtonSize[size]}`,
  };

  return (
    <Link className={style.link} to={to}>
      {children}
    </Link>
  );
};

export default Button;
