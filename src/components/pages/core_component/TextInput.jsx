import clsx from "clsx";
import React from "react";

const TextInput = ({
  name,
  id,
  placeholder,
  label,
  labelClass,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row text-black">
      {!!label && (
        <label className="font-medium" for={name}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "w-full border bg-transparent placeholder:text-white text-white p-3 border-solid rounded-full border-black",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextInput;
