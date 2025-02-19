export const API_KEY = 'AIzaSyCIwNVPghEWGBBQeLfdXRWG10Jf5mXx8ho';

export const valueConvert = (value) => {
  if(value >= 1000000)
    return Math.floor(value / 1000000) + "M";
  if(value >= 1000)
    return Math.floor(value / 1000) + "K";

  return value;
}