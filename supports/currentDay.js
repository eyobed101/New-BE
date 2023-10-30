//shop status based on days of week
const getCurrentDayOfWeek = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const currentDayOfWeek = today.getDay();

  return daysOfWeek[currentDayOfWeek];
};

export default getCurrentDayOfWeek;