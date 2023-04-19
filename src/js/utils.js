import { icons } from './icons';

export const getFormatDate = () => {
  // create a new Date object
  const date = new Date();

  // get the day, month, and year from the Date object
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // combine the day, month, and year into the desired format
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};

export const getCurrentDay = (param = { Format: 'long', Input: new Date() }) => {
  const { Input, Format } = param;
  const date = new Date(Input); // create a new Date object
  const options = { weekday: Format || 'long' }; // set the options to get the weekday as a full name string
  const dayOfWeekString = date.toLocaleDateString('en-US', options); // get the day of the week as a string in the format of "Sunday", "Monday", etc.

  return dayOfWeekString; // output the day of the week
};

export const getCurrentTime = () => {
  const date = new Date(); // create a new Date object
  const options = { hour: 'numeric', minute: 'numeric', hour12: true }; // set the options to get the time in the format of "h:mm AM/PM"
  const timeString = date.toLocaleTimeString([], options); // get the time as a string in the format of "h:mm AM/PM"
  return timeString; // return the time as a string
};

export const getIcon = (id) => {
  const icon = icons.find((icon) => icon.id === id);
  const icon_default = icons.find((icon) => icon.id === 7);

  return icon ? icon : icon_default;
};

export const isDay = () => {
  // Get the current time
  let now = new Date();

  // Get the sunrise and sunset times for your location
  let sunrise = new Date();
  sunrise.setHours(6);
  sunrise.setMinutes(0);
  let sunset = new Date();
  sunset.setHours(18);
  sunset.setMinutes(0);

  // Determine whether it is currently daytime or nighttime
  return now > sunrise && now < sunset;
};
