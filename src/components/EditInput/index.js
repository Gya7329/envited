import React from "react";

export const EditInput = ({
  type,
  isEdit,
  renderComp,
  value,
  name,
  className = "",
  onEdit,
}) => {
  if (!isEdit) {
    return renderComp;
  }
  const onChange = (event) => {
    const { value, name } = event.target;
    const older = localStorage.getItem("data");
    if (older) {
      const data = JSON.parse(older);
      data[name] = value;
      localStorage.setItem("data", JSON.stringify(data));
    }
  };
  return (
    <>
      <input
        className={className + "outline-0 focus:outline-0 block"}
        onChange={onChange}
        defaultValue={value}
        type={type}
        name={name}
        onBlur={(e) => onEdit(e, name, false)}
        autoFocus={isEdit}
      />
    </>
  );
};
