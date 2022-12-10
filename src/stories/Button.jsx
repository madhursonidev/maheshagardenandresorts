import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

export const Variants = {
  Primary: "primary",
  White: "white",
};

const Button = ({
  children,
  className,
  variant = Variants.Primary,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={clsx(
          "font-bold py-2 px-4 rounded",
          {
            "bg-gold-500 text-white hover:bg-gold-700":
              variant === Variants.Primary,
            "bg-white text-black hover:bg-slate-300":
              variant === Variants.White,
          },
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(Variants)),
  onClick: PropTypes.func,
};

export default Button;
