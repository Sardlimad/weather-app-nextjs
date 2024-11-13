const formatTo12Hour = (dateString) => {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convierte 0 a 12 para las horas en AM/PM

  return `${hours}:${minutes} ${ampm}`;
};

export default formatTo12Hour;
