import {
  Box,
  Typography,
  useTheme,
  // useMediaQuery
} from "@mui/material";
import Form from "./Form";
import vitsphere from "vitgif.gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import video1 from "../../bgvid.mp4";
const LoginPage = () => {
  const theme = useTheme();
  const imageClass = theme.palette.mode === "dark" ? "invert" : "";
  // const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const popIncorrectPass = () => {
    toast.error("Incorrect Email or Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // console.log("hello");
  };
  const popUserCreated = () => {
    toast.success("Account created successfully, now Login", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // console.log("hello");\
  };

  return (
    <div>
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Box
        width="30vw"
        p="2rem"
        minWidth="450px"
        m="1rem auto"
        borderRadius="1.5rem"
        className="glass"
        margin="auto"
      >
        <Box
          width="100%"
          // p="1rem 6%"
          textAlign="center"
        >
          <img
            alt="logo"
            style={{
              filter:
                "grayscale(100%) brightness(70%) sepia(50%) hue-rotate(-100deg) saturate(500%) contrast(1)",
              width: "10vw",
              minWidth: "8rem",
            }}
            src={vitsphere}
          />
        </Box>

        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to VitSphere, the Social Media for just us VIT Peeps!
        </Typography>
        <Form
          popIncorrectPass={popIncorrectPass}
          popUserCreated={popUserCreated}
        />
      </Box>

      <style>{`
      .invert {
    filter: invert(100%);
    }

imglog{
  filter: grayscale(100%) brightness(70%) sepia(50%) hue-rotate(-100deg) saturate(500%) contrast(1);
}

 #rest{
  z-index: 5;
 }

    
    
@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index:-5;
}

.video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: blur(80px);
} 
.glass{
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}


      `}</style>
    </div>
  );
};

export default LoginPage;
