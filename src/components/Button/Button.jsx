import { ButtonSize, ButtonVariant } from "./ButtonVariant";

const Button = ({ type = "button", size, variant = "", children, onClick }) => {
  const style = {
    button: `rounded-[10px] flex items-center justify-center gap-2 font-inter font-semibold text-[0.875em] whitespace-nowrap ${ButtonVariant[variant]} ${ButtonSize[size]}`,
  };

  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
