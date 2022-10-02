import { FcManager } from "react-icons/fc";
import { MdCelebration } from "react-icons/md";
import { BsPinMap, BsCalendarDate, BsCardImage } from "react-icons/bs";

export const EVENT_CREATE = [
  {
    name: "host",
    icon: FcManager,
    label: "Host Name",
  },
  {
    name: "event",
    icon: MdCelebration,
    label: "Event Name",
  },
  {
    name: "address",
    label: "Address",
    icon: BsPinMap,
  },
  {
    name: "start",
    label: "Starting At",
    icon: BsCalendarDate,
    type: "datetime-local",
  },
  {
    name: "end",
    label: "Ending At",
    icon: BsCalendarDate,
    type: "datetime-local",
  },
  {
    name: "eventImage",
    label: "Event Image",
    icon: BsCardImage,
    type: "file",
  },
];

export const initState = EVENT_CREATE.map((k) => k.name).reduce((acc, i) => {
  acc[i] = "";
  return acc;
}, {});
