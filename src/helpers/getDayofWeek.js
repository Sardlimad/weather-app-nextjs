const getDayOfWeek = (dateString) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(dateString);

  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
};

export default getDayOfWeek;
