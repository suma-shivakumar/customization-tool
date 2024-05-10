import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Card,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";

const UTMGeneratorForm = () => {
  const [formData, setFormData] = useState({
    websiteURL: "",
    campaignId: "",
    campaignSource: "",
    campaignMedium: "",
    campaignName: "",
    campaignTerm: "",
    campaignContent: "",
  });
  const [IsGenerateLink, setIsGenerateLink] = useState(false);
  const [link, setlink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateUTM = () => {
    const {
      websiteURL,
      campaignId,
      campaignSource,
      campaignMedium,
      campaignName,
      campaignTerm,
      campaignContent,
    } = formData;
    const utmParams = `utm_source=${campaignSource}&utm_medium=${campaignMedium}&utm_campaign=${campaignName}&utm_term=${campaignTerm}&utm_content=${campaignContent}&utm_id=${campaignId}`;
    const utmLink = `${websiteURL}?${utmParams}`;
    // Copy to clipboard
    navigator.clipboard.writeText(utmLink).then(
      () => {
        alert("UTM Link copied to clipboard!");
      },
      () => {
        alert("Failed to copy UTM Link to clipboard!");
      }
    );
  };

  const saveData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/utms",
        {
          data: formData,
        },
        {
          headers: {
            Authorization: `Bearer a5b0894443e57674ecfac2ebcc33e7e740128503962ded6ef3beef453eed722205a6f352ec3181b16039a48eefdd0b37924b4422af45cdf714d3a0f5ca2498cd5392d7cc89b2ae06f3c593a1e927902f95134c442df1d3d5558ac6c699224d8730485664a0596d0920c469bf6cf5740968339c7e349ff66d5bb6f517d57e4112`,
          },
        }
      );
      console.log("Data saved successfully:", response.data);
      if (response?.data?.data?.id) {
        setIsGenerateLink(true);

        const {
          websiteURL,
          campaignId,
          campaignSource,
          campaignMedium,
          campaignName,
          campaignTerm,
          campaignContent,
        } = formData;
        const utmParams = `utm_source=${campaignSource}&utm_medium=${campaignMedium}&utm_campaign=${campaignName}&utm_term=${campaignTerm}&utm_content=${campaignContent}&utm_id=${campaignId}`;
        const utmLink = `${websiteURL}?${utmParams}`;

        setlink(utmLink);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4">UTM Generator Form</Typography>
      <Card
        sx={{
          padding: "2em",
          marginTop: "3em",
          backgroundColor: "custom.main",
          border: `1px solid #283040`,
          boxShadow: "1px 1px 6px 1px #ccc",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Website URL"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign ID"
              name="campaignId"
              value={formData.campaignId}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign Source"
              name="campaignSource"
              value={formData.campaignSource}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign Medium"
              name="campaignMedium"
              value={formData.campaignMedium}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign Name"
              name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign Term"
              name="campaignTerm"
              value={formData.campaignTerm}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Campaign Content"
              name="campaignContent"
              value={formData.campaignContent}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <Button variant="contained" color="primary" onClick={saveData}>
              Save
            </Button>
          </Grid>
          {IsGenerateLink && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <TextField
                label="UTM Link"
                name="utmLink"
                value={link}
                // onChange={handleChange}
                fullWidth
              />
              <Box sx={{ margin: "5px" }}></Box>
              <Button variant="contained" color="primary" onClick={generateUTM}>
                Copy
              </Button>
            </Grid>
          )}
        </Grid>
      </Card>
    </Container>
  );
};

export default UTMGeneratorForm;
