import weatherIcons from "./weatherIcons";

export const getIcon = (code, isDay) => {
  return weatherIcons[code][isDay ? "day" : "night"];
};
