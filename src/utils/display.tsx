import useMediaQuery from "@mui/material/useMediaQuery";

export const IsMobile = () => {
  return useMediaQuery("(max-width:600px)");
};

export const IsTablet = () => {
    return useMediaQuery("(max-width:1024px)");
  };
