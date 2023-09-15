import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import image6 from "../../assets/lock (7) 1 (1).png";
import "./Footer.scss";
import { isMobile } from "react-device-detect";

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        height: isMobile ? "102px" : "50px",
        width: "100%",
        backgroundColor: "#252F3D",
      }}
    >
      <Box
        sx={{
          paddingLeft: isMobile ? "60px" : "120px",
          paddingRight: isMobile ? "60px" : "120px",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          paddingTop: "13px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            {" "}
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              fontFamily={"Manrope, sans-serif"}
              noWrap
            >
              Copyright (c) 2023
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "white" }}
          />
          <Box sx={{ ml: "5px" }}>
            {" "}
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              fontFamily={"Manrope, sans-serif"}
              noWrap
            >
              Clarifionsupport@clarifion.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          {" "}
          <img src={image6} alt="logo" style={{ marginRight: "3px" }} />
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            fontFamily={"Manrope, sans-serif"}
            noWrap
          >
            Secure 256-bit SSL encryption.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
