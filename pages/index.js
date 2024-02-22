import React, { useRef, useState } from "react";
// import { Button, Typography, Grid, TextField, Card, CardContent, CardActions } from "@material-ui/core";
import WatchFace from "@/components/WatchFace";
import Straps from "@/components/Straps";
import { Button, Grid, Typography } from "@mui/material";
import CompleteWatch from "@/components/CompleteWatch";

const IndexPage = () => {
  const [watchFace, setWatchFace] = useState('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-stainless-gold-s9_VW_PF+watch-face-45-stainless-gold-s9_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=NXdBdC9BY2hhV2VGa1gvYVFjeVV4RVJvbUVJY2FGdnF0cDkrd0J3Y0VvQTl6czhPNDFCZmJQV0Ywam9DVEt0cXNCa1pzS05JdTV6RHBHVm5HNlNKUzFoN2oxb042ckszdTFqQ3lCcXRLaFFYWGwvU1BWNEFyNjFTRTFNL0VwaUhmZ0VZQys1RHEybXo5QloyUExweVRoL1oyOEFZSm9mMk5ITHg0WlVWK0VjPQ');
  const [straps, setStraps] = useState('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&.v=OVVHcVZVMzV6dHN6ekJjNS8xZkNCeGRlWDlJOVhnQ3ZyVklUVXo4U21JZExSWWRxdUJTNit5QktrMUJPRWZRditGQVYwcFRNS0hQZVBkSzlFSEo1clE9PQ');
  const [logo, setLogo] = useState(null);
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

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

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
            const link = document.createElement('a');
            link.download = 'complete_watch.png';
            link.href = canvas.toDataURL();
            link.click();
          };
        } else {
          const link = document.createElement('a');
          link.download = 'complete_watch.png';
          link.href = canvas.toDataURL();
          link.click();
        }
      };
    };
  };

  return (
    <div>
      <Typography variant="h1">Watch Customization Tool</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Watch Face</Typography>
          
          <Button variant="outlined" onClick={() => handleWatchFaceChange('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-aluminum-pink-nc-s9_VW_PF+watch-face-45-bhm-sport-band-unitybloom-202401_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=VHdBZlF5amgxMUlTcnA3cVdyS25DNldIczNiRGpkdWZDVmdKeE1iaUlPTEpBelFSNmxJdTBIZGc2Z0MwaXVvRCtSM3VNT2JXVnpVZnQ3WlYvL0x1TnVFV0dpU0xxT1hDVUo0U3ptd0Ntb0NYZ3pCMEN2N2dodUlIRS9qMDNsSmFEc1lLS2lGSE9pajR4MzFVRjVTbktzZXAvamFPcVF2ZktTZmxsbU1QQjVPRktWZXpEVmY5ckx2Y0lmZTlFN0pk')}>
            {/* Option 2 */}
            <img src={'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-aluminum-pink-nc-s9_VW_PF+watch-face-45-bhm-sport-band-unitybloom-202401_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=VHdBZlF5amgxMUlTcnA3cVdyS25DNldIczNiRGpkdWZDVmdKeE1iaUlPTEpBelFSNmxJdTBIZGc2Z0MwaXVvRCtSM3VNT2JXVnpVZnQ3WlYvL0x1TnVFV0dpU0xxT1hDVUo0U3ptd0Ntb0NYZ3pCMEN2N2dodUlIRS9qMDNsSmFEc1lLS2lGSE9pajR4MzFVRjVTbktzZXAvamFPcVF2ZktTZmxsbU1QQjVPRktWZXpEVmY5ckx2Y0lmZTlFN0pk'} alt='' />
          </Button>
          <Button variant="outlined" onClick={() => handleWatchFaceChange('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-stainless-gold-s9_VW_PF+watch-face-45-stainless-gold-s9_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=NXdBdC9BY2hhV2VGa1gvYVFjeVV4RVJvbUVJY2FGdnF0cDkrd0J3Y0VvQTl6czhPNDFCZmJQV0Ywam9DVEt0cXNCa1pzS05JdTV6RHBHVm5HNlNKUzFoN2oxb042ckszdTFqQ3lCcXRLaFFYWGwvU1BWNEFyNjFTRTFNL0VwaUhmZ0VZQys1RHEybXo5QloyUExweVRoL1oyOEFZSm9mMk5ITHg0WlVWK0VjPQ')}>
            {/* Option 1 */}
            <img src={'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-45-stainless-gold-s9_VW_PF+watch-face-45-stainless-gold-s9_VW_PF?wid=500&hei=500&fmt=png-alpha&.v=NXdBdC9BY2hhV2VGa1gvYVFjeVV4RVJvbUVJY2FGdnF0cDkrd0J3Y0VvQTl6czhPNDFCZmJQV0Ywam9DVEt0cXNCa1pzS05JdTV6RHBHVm5HNlNKUzFoN2oxb042ckszdTFqQ3lCcXRLaFFYWGwvU1BWNEFyNjFTRTFNL0VwaUhmZ0VZQys1RHEybXo5QloyUExweVRoL1oyOEFZSm9mMk5ITHg0WlVWK0VjPQ'} alt='' />
          </Button>
          {/* <WatchFace imageUrl={watchFace} logoUrl={logo} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Straps</Typography>
          <Button variant="outlined" onClick={() => handleStrapsChange('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&.v=OVVHcVZVMzV6dHN6ekJjNS8xZkNCeGRlWDlJOVhnQ3ZyVklUVXo4U21JZExSWWRxdUJTNit5QktrMUJPRWZRditGQVYwcFRNS0hQZVBkSzlFSEo1clE9PQ')}>
            {/* Option 1 */}
            <img src={'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&.v=OVVHcVZVMzV6dHN6ekJjNS8xZkNCeGRlWDlJOVhnQ3ZyVklUVXo4U21JZExSWWRxdUJTNit5QktrMUJPRWZRditGQVYwcFRNS0hQZVBkSzlFSEo1clE9PQ'} alt='' />
          
          </Button>
          <Button variant="outlined" onClick={() => handleStrapsChange('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT8F3ref_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&.v=Y2xvZWFPcTVyS1NiV1Y5T0xrZVI4SGs5bEJmUERLa0l3SmE1L1ptYnpaZmdiS25JMjZWSzNNSHUxeHV5WU90Y2FkZVFiYlhFaUlmcTN2S3pkTVJtTlg1cU1XNzliRmYrYjhjMnhmd2RlR2M9')}>
            {/* Option 2 */}
            <img src={'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT8F3ref_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&.v=Y2xvZWFPcTVyS1NiV1Y5T0xrZVI4SGs5bEJmUERLa0l3SmE1L1ptYnpaZmdiS25JMjZWSzNNSHUxeHV5WU90Y2FkZVFiYlhFaUlmcTN2S3pkTVJtTlg1cU1XNzliRmYrYjhjMnhmd2RlR2M9'} alt='' />
          </Button>
          {/* <Straps imageUrl={straps} logoUrl={logo} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Upload Logo</Typography>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </Grid>
        <Grid item xs={12}>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <CompleteWatch watchFaceUrl={watchFace} strapsUrl={straps} logoUrl={logo} />
        </Grid>
        {/* <Grid item xs={12}>
          <Button variant="outlined" onClick={handleDownload}>Download Complete Watch</Button>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default IndexPage;
