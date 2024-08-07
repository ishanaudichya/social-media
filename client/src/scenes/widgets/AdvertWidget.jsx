import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Developers
        </Typography>
        <Typography color={medium}>Contact Us</Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color={main}>Ishan Audichya</Typography>
        <Typography color={medium}><a href='https://www.linkedin.com/in/ishan-audichya/' style={{textDecoration: 'none'}}>LinkedIn/ishanaudichya</a></Typography>
      </FlexBetween>
       <Typography color={medium} m="0.5rem 0">
     <b>
       This is only a test demo with a test DB. Other users are hidden for privacy.
      </b> <br/>
        Make sure to check out our socials and appreciate if u liked our effort
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
