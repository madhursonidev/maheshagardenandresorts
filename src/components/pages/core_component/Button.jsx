import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primary-yellow hover:bg-orange-400 text-white font-bold py-2 px-4 rounded",
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
};

export default Button;
