import { useState } from "react";
import "./App.css";
import Hair from "./components/Hair";
import Shirt from "./components/Shirt";
import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Eyes from "./components/Eyes";
import Pants from "./components/Pants";
import Head from "./components/Head";
import Nose from "./components/Nose";
import Mouth from "./components/Mouth";
import Shoes from "./components/Shoes";
import RightHand from "./components/RightHand";
import LeftHand from "./components/LeftHand";
import OrientalEyes from "./components/OrientalEyes";
import IconEye from "./components/IconEye";
import IconOrientalEye from "./components/IconOrientalEye";

function App() {
  const [colorEyes, setColorEyes] = useState("black");
  const [orientalEyes, setOrientalEyes] = useState(false);

  return (
    <>
      <Box className='App'>
        <Shoes />
        <Pants />
        <RightHand />
        <LeftHand />
        <Shirt />
        <Head colorHair='#DDD6AE' colorFace='#FFE6CE' />
        <Hair color='#000' />
        <Box onClick={() => setOrientalEyes(!orientalEyes)}>
        {orientalEyes && <OrientalEyes color={colorEyes} />}
        {!orientalEyes && <Eyes color={colorEyes} />}
        </Box>
        <Nose />
        <Mouth />
      </Box>
      <Box
        sx={{
          p: { xs: 2, md: 3, xl: 4 },
          mx: { md: 3, xl: "40px" },
          display: "flex",
          flexDirection: "row",
          gap: 1,
          mt: 2,
          mb: 0,
          bgcolor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <IconButton
          sx={{
            bgcolor: "#5096f7",
            "&:hover": {
              bgcolor: "#60A6f7",
            },
          }}
          onClick={() => setColorEyes("#5096f7")}
        />
        <IconButton
          sx={{
            bgcolor: "#009933",
            "&:hover": {
              bgcolor: "#00AA33",
            },
          }}
          onClick={() => setColorEyes("#009933")}
        />
        <IconButton
          sx={{
            bgcolor: "#666633",
            "&:hover": {
              bgcolor: "#667733",
            },
          }}
          onClick={() => setColorEyes("#666633")}
        />
        <IconButton
          sx={{
            bgcolor: "#000000",
            "&:hover": {
              bgcolor: "#444",
            },
          }}
          onClick={() => setColorEyes("#000000")}
        />
      </Box>
    </>
  );
}

export default App;
