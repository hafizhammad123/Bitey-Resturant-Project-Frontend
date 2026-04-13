import React from "react";
import { Box, Container } from "@mui/material";

const BannerImage = ({image}) => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: { xs: "120px", sm: "180px", md: "450px" },
          borderRadius: "20px",
          overflow: "hidden",
          mt: 2,
        }}
      >
        <Box
          component="img"
          src={image} // 👈 apni image yahan lagao
          alt="banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Container>
  );
};

export default BannerImage;