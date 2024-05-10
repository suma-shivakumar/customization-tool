import React from "react";
import styles from "./CompleteWatch.module.css";
import { Box, MenuItem, Select, Typography } from "@mui/material";

const CoinCustomization = ({
  watchFaceUrl,
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
        {/* {logoUrl && (
          <Box
            style={{
              position: "absolute",
              top: "45%",
              left: "52%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "20%",
              maxHeight: "20%",
              mixBlendMode: "multiply",
              filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
            }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "brightness(0.8) grayscale(1) contrast(1.2)",
              }}
            />
          </Box>
        )} */}

        {logoUrl && (
          <Box
            style={{
              position: "absolute",
              top: "45%",
              left: "52%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "20%",
              maxHeight: "20%",
              textAlign: "center",
            }}
          >
            <div className={styles.coinLogo}>
              <img src={logoUrl} alt="Logo" />
            </div>
          </Box>
        )}

        {/* {logoUrl && (
          <Box
            style={{
              position: "absolute",
              top: "45%",
              left: "52%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "20%",
              maxHeight: "20%",
              textAlign: "center",
            }}
          >
            <div className={styles.coinText}>
              <span>{message}</span>
            </div>
          </Box>
        )} */}
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
              style={{
                fontFamily: fontFamily,
                color: textColor,
                // color: "#666",
                position: "relative",
                width: "100%",
                height: "50%",
                padding: "10px",
                left: "5px",
                textShadow: "1px 1px 1px #fff, -1px -1px 1px #000",
              }}
            >
              {message}
            </Typography>
            {/* <div className={styles.coinText}>
              <span>{message}</span>
            </div> */}
          </Box>
        )}

        {/* {logoUrl && <img src={logoUrl} alt="Logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxHeight: '50px', maxWidth: '50px' }} />} */}
      </Box>
    </div>
  );
};

export default CoinCustomization;
