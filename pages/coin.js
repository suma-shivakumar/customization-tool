import React, { useRef, useState } from "react";
// import { Button, Typography, Grid, TextField, Card, CardContent, CardActions } from "@material-ui/core";
import WatchFace from "@/components/WatchFace";
import Straps from "@/components/Straps";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CompleteWatch from "@/components/CompleteWatch";
import { ChromePicker } from "react-color";
import CoinCustomization from "@/components/CoinCustomization";

const IndexPage = () => {
  const [watchFace, setWatchFace] = useState("../asset/images/silvercoin.png");
  const [silverCoin, setSilverCoin] = useState(
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bhimagold.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fd1bpnn2a5id540.cloudfront.net%252F1653277918007%252F42122331-d43a-11ed-8a0e-39fda0b4104a.jpg%26w%3D1200%26q%3D75&tbnid=ZUDTWNOvpoHCNM&vet=12ahUKEwiFsIehzL-EAxUFmWMGHRq2AicQMygMegQIARBn..i&imgrefurl=https%3A%2F%2Fwww.bhimagold.com%2Fproducts%2F75gm-plain-silver-coin-slcn75pla&docid=YETT_pQeaIFOJM&w=1200&h=1200&q=plain%20gold%20and%20silver%20coin&safe=active&ved=2ahUKEwiFsIehzL-EAxUFmWMGHRq2AicQMygMegQIARBn"
  );
  //   const [straps, setStraps] = useState("../asset/images/straps/Strap 1.png");
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textColor, setTextColor] = useState("#666");
  const canvasRef = useRef(null);

  const handleWatchFaceChange = (imageUrl) => {
    setWatchFace(imageUrl);
  };

  const handleStrapsChange = (imageUrl) => {
    setStraps(imageUrl);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLogo(reader.result);
    };
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const watchFaceImg = new Image();
    const strapsImg = new Image();
    const logoImg = new Image();

    watchFaceImg.src = watchFace;
    strapsImg.src = straps;
    logoImg.src = logo;

    watchFaceImg.onload = () => {
      context.drawImage(watchFaceImg, 0, 0);
      strapsImg.onload = () => {
        context.drawImage(strapsImg, 0, 0);
        if (logoImg.src) {
          logoImg.onload = () => {
            context.drawImage(logoImg, 0, 0);
            const link = document.createElement("a");
            link.download = "complete_watch.png";
            link.href = canvas.toDataURL();
            link.click();
          };
        } else {
          const link = document.createElement("a");
          link.download = "complete_watch.png";
          link.href = canvas.toDataURL();
          link.click();
        }
      };
    };
  };

  return (
    <div>
      <Typography variant="h1">Coin Customization Tool</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Coin Face</Typography>

          <Button
            variant="outlined"
            onClick={() =>
              handleWatchFaceChange("../asset/images/silvercoin.png")
            }
          >
            {/* Option 2 */}
            {/* <img src={'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-aluminum-pink-nc-s9_VW_PF+watch-face-45-bhm-sport-band-unitybloom-202401_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=VHdBZlF5amgxMUlTcnA3cVdyS25DNldIczNiRGpkdWZDVmdKeE1iaUlPTEpBelFSNmxJdTBIZGc2Z0MwaXVvRCtSM3VNT2JXVnpVZnQ3WlYvL0x1TnVFV0dpU0xxT1hDVUo0U3ptd0Ntb0NYZ3pCMEN2N2dodUlIRS9qMDNsSmFEc1lLS2lGSE9pajR4MzFVRjVTbktzZXAvamFPcVF2ZktTZmxsbU1QQjVPRktWZXpEVmY5ckx2Y0lmZTlFN0pk'} alt='' /> */}
            <img
              src={"../asset/images/silvercoin.png"}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
          </Button>

          {/* <WatchFace imageUrl={watchFace} logoUrl={logo} /> */}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4">Upload Logo</Typography>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "50%",
          }}
        >
          {/* Input field for text message */}

          <Box>
            <Typography variant="h4">Enter Text Message</Typography>
            <TextField
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Enter your text message"
            />
          </Box>

          <Box>
            <Typography variant="h4">Select Font</Typography>
            <Select value={fontFamily} onChange={handleFontFamilyChange}>
              <MenuItem value="Arial">Arial</MenuItem>
              <MenuItem value="Times New Roman">Times New Roman</MenuItem>
              <MenuItem value="Verdana">Verdana</MenuItem>
              {/* Add more font options as needed */}
            </Select>
          </Box>

          <Box>
            <Typography variant="h4">Select Text Color</Typography>
            <ChromePicker
              color={textColor}
              onChangeComplete={handleTextColorChange}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <CoinCustomization
            watchFaceUrl={watchFace}
            logoUrl={logo}
            message={message}
            textColor={textColor}
            fontFamily={fontFamily}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;
