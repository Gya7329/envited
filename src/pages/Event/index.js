import React, { useEffect, useState } from "react";
import { VscCalendar } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import IconRow from "../../components/IconRow";
import { timeFormatter } from "../../utils/dateFormater";
import { GoBack } from "../../components/GoBack";
import { useNavigate } from "react-router-dom";
import { initState } from "../Create/constants";
import { useImage } from "../../hooks/useImage";
import { EditInput } from "../../components/EditInput";

const getEvent = () => {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  }
  return {};
};

export const Event = () => {
  const [editable, setEditable] = useState(initState);
  const { host, address, start, end, event, preview } = getEvent();
  const router = useNavigate();
  const getImage = useImage();

  useEffect(() => {
    if (!host) {
      router("/");
    }
  }, [host, router]);

  const onEdit = (e, name, value = true) => {
    setEditable((pr) => ({
      ...pr,
      [name]: value,
    }));
  };

  return (
    <>
      <GoBack to="/" />
      <div className="px-48 py-12">
        <div className="max-w-full py-10 flex mx-auto overflow-hidden md:max-w-full justify-between">
          <div>
            <div className="flex items-start flex-col h-full justify-start p-10">
              <EditInput
                name="event"
                isEdit={editable.event}
                value={event}
                onEdit={onEdit}
                className="text-5xl text-skin-primary font-extrabold"
                renderComp={
                  <span
                    className="text-5xl text-skin-primary font-bold"
                    onClick={(e) => onEdit(e, "event")}
                  >
                    {event}
                  </span>
                }
              />
              <span className="text-skin-secondary-gray mt-2">
                Hoisted by :{" "}
                <EditInput
                  name="host"
                  isEdit={editable.host}
                  value={host}
                  onEdit={onEdit}
                  renderComp={
                    <span
                      className="font-bold"
                      onClick={(e) => onEdit(e, "host")}
                    >
                      {host}
                    </span>
                  }
                />
              </span>
              <div className="d-flex justify-start w-full mt-4">
                <IconRow
                  {...{
                    icon: GoLocation,
                    header: <span>{timeFormatter(start)}</span>,
                    headerName: "start",
                    subHeaderName: "end",
                    onEdit,
                    isDate: true,
                    editable,
                    subHeader: (
                      <span>
                        to{" "}
                        <span className="font-medium">
                          {timeFormatter(end)}
                        </span>
                      </span>
                    ),
                  }}
                />
                <IconRow
                  {...{
                    icon: VscCalendar,
                    header: "Address",
                    subHeader: address,
                    subHeaderName: "address",
                    onEdit,
                    editable,
                    subHeader: address,
                  }}
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="md:shrink-0">
            <img
              className="h-80 w-full object-cover md:h-full md:w-80"
              src={preview || getImage("event")}
              alt="event"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
