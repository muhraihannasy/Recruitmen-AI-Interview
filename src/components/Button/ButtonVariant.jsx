const ButtonVariant = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  fourty: "bg-blue text-white",
  grey: "bg-grey text-white",
  "light-grey": "bg-lightGrey2 text-white",
  red: "bg-red-crimson text-white",
  disabled: "bg-[#DEDEDE] text-white cursor-default",
  whitelab: "bg-white text-primary",

  // Outline 1
  "outline-1": "border-[1px] border-green text-secondary",
  "outline-1-bg": "border-[1px] border-green bg-soft-green text-secondary",

  // Outline 2
  "outline-2": "border-[1px] border-primary text-primary",
  "outline-2-bg":
    "border-[1px] border-red-crimson bg-soft-red text-red-crimson",

  // Outline 3
  "outline-3": "border-[1px] border-red-crimson text-red-crimson",
  "outline-3-bg":
    "border-[1px] border-red-crimson bg-soft-red text-red-crimson",

  // Outline 4
  "outline-4":
    "border-[1px] border-[#9A9A9A] transition-all text-[#9A9A9A] hover:border-primary hover:text-primary",
};

const ButtonSize = {
  sm: "h-[35px] px-[0.9375em]",
  md: "h-[3em] px-[0.9375em]",
};

export { ButtonSize, ButtonVariant };
