export const timeFormatter = (time) => {
  const newDate = new Date(time);
  return `${newDate.toDateString()}, ${newDate.toLocaleTimeString()}`;
};
