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
      <FlexBetween>
        <Typography color={main}>Shailza Thakur</Typography>
        <Typography color={medium}><a href='https://www.linkedin.com/in/shailzathakur0707/' style={{textDecoration: 'none'}}>LinkedIn/shailzathakur</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Make sure to check out our socials and appreciate if u liked our effort
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
