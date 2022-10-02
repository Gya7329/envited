import React from "react";

export const Input = ({
  label,
  name,
  value,
  onChange,
  handleBlur,
  type = "text",
  error,
  icon: Icon,
}) => {
  return (
    <label htmlFor={name} className="block mb-6">
      <span className="flex items-center text-lg font-medium text-slate-700 mb-2 ">
        <Icon /> <span className="ml-2">{label}</span>
      </span>
      <input
        onBlur={handleBlur}
        required
        autoFocus={name === "host"}
        type={type}
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        className={`border rounded-lg px-3 placeholder-slate-400 w-full py-2 focus-visible:outline-primary valid:border-green-500`}
      />
      {error && <small className="text-red-300">Please Fill {label}</small>}
    </label>
  );
};

export default Input;
