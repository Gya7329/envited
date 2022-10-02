import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { EditInput } from "../EditInput";

const IconRow = ({
  icon: Icon,
  header,
  subHeader,
  isDate = false,
  onEdit,
  headerName,
  subHeaderName,
  editable = {},
}) => {
  console.log({
    editable,
    headerName,
    subHeaderName,
  });
  return (
    <main className="flex justify-between w-full items-center">
      <section className="flex items-center space-x-3 py-3 w-full mr-10">
        <aside className="bg-white border w-10 h-10 flex rounded-lg items-center justify-center">
          <Icon fill="#240D57" />
        </aside>
        <aside>
          <EditInput
            name={headerName}
            isEdit={isDate ? editable[headerName] : false}
            value={header}
            onEdit={onEdit}
            type={isDate ? "datetime-local" : "text"}
            renderComp={
              <span
                onClick={() => onEdit(null, headerName)}
                className="block text-skin-primary font-bold"
              >
                {header}
              </span>
            }
          />
          <EditInput
            name={subHeaderName}
            isEdit={editable[subHeaderName]}
            value={subHeader}
            onEdit={onEdit}
            type={isDate ? "datetime-local" : "text"}
            renderComp={
              <span onClick={() => onEdit(null, subHeaderName)}>
                {subHeader}
              </span>
            }
          />
        </aside>
      </section>
      <IoIosArrowForward />
    </main>
  );
};

export default IconRow;
