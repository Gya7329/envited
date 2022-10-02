import landingImage from "../assets/landing.svg";
import eventImage from "../assets/event.png";
export const useImage = () => {
  const getImage = (name) => {
    const image = {
      event: landingImage,
      landing: landingImage,
      create: eventImage,
    };
    return image[name];
  };
  return getImage;
};
