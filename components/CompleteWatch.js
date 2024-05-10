import React from "react";
import styles from "./CompleteWatch.module.css";
import { Box, MenuItem, Select, Typography } from "@mui/material";

const CompleteWatch = ({
  watchFaceUrl,
  strapsUrl,
  logoUrl,
  message,
  textColor,
  fontFamily,
}) => {
  return (
    <div className={styles.container}>
      {/* <h2>Complete Watch Preview</h2> */}
      <Typography variant="h4">Complete Watch Preview</Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "500px",
          height: "500px",
          // backgroundColor: "cyan",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   width: "500px",
        //   alignItems: "center",
        //   // backgroundColor: "yellow",
        // }}
        >
          <img
            src={strapsUrl}
            alt="Straps"
            // className={styles.straps}
            style={{
              width: "300px",
              height: "500px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
        <Box
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   width: "500px",
          //   backgroundColor: "lightgreen",
          // }}
          sx={{ position: "absolute", top: 105, left: 130 }}
        >
          <img
            src={watchFaceUrl}
            alt="Watch Face"
            className={styles.watchFace}
            style={{ width: "260px", height: "260px", objectFit: "contain" }}
          />
        </Box>
        {logoUrl && (
          <Box
          // sx={{
          //   position: "absolute",
          //   top: "60%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          //   zIndex: 1,
          //   maxWidth: "20%",
          //   maxHeight: "20%",
          // }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                maxWidth: "20%",
                maxHeight: "20%",
              }}
            />
          </Box>
        )}
        {message && (
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              width: "100%",
              textAlign: "center",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "20%",
              maxHeight: "20%",
              // color: textColor,
              // fontFamily: font,
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontFamily: fontFamily, color: textColor }}
            >
              {message}
            </Typography>
          </Box>
        )}

        {/* {logoUrl && <img src={logoUrl} alt="Logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxHeight: '50px', maxWidth: '50px' }} />} */}
      </Box>
    </div>
  );
};

export default CompleteWatch;
