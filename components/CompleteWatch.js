import React from "react";
import styles from "./CompleteWatch.module.css";
import { Typography } from "@mui/material";

const CompleteWatch = ({ watchFaceUrl, strapsUrl, logoUrl }) => {
    
  return (
    <div className={styles.container}>
      {/* <h2>Complete Watch Preview</h2> */}
      <Typography variant="h4">Complete Watch Preview</Typography>
      <div className={styles.watchContainer}>
        <img src={strapsUrl} alt="Straps" className={styles.straps} />
        <img src={watchFaceUrl} alt="Watch Face" className={styles.watchFace} />
        {logoUrl && <img src={logoUrl} alt="Logo" className={styles.logo} />}
        {/* {logoUrl && <img src={logoUrl} alt="Logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxHeight: '50px', maxWidth: '50px' }} />} */}
      </div>
    </div>
  );
};

export default CompleteWatch;
