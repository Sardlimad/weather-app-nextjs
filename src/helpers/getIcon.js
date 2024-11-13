import weatherIcons from "./weatherIcons";

export const getIcon = (code, isDay, size) => {
  return weatherIcons[code][isDay ? "day" : "night"];
};
