import { getAuthToken } from "./storage";

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const isLogin = () => {
  // const userMetaData = getAuthToken();
  // if (userMetaData) {
  //   return true;
  // }
  return true;
};

const utils = {
  isLogin,
};

export default utils;
