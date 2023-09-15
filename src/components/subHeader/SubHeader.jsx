import React from "react";
import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import clartonlogo from "../../assets/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png";
import mlogo from "../../assets/Frame 1484578055.png";
import nortonicon from "../../assets/norton-antivirus-logo 1.png";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <Box
      className="subheader"
      sx={{ paddingRight: "120px", paddingLeft: "120px", marginTop: "50px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src={clartonlogo} alt="Clarifion Logo" />
        </Box>
        <Box>
          <img src={mlogo} alt="Microsoft Logo" />
          <img
            src={nortonicon}
            alt="Norton Logo"
            style={{ marginLeft: isMobile ? "16px" : "32px" }}
          />
        </Box>
      </Box>
      <Box
        className="subheader-content"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <Typography
          className="title"
          fontSize={48}
          fontWeight={400}
          fontFamily={"Manrope, sans-serif"}
        >
          Wait ! your order in progress.
        </Typography>
        <Typography
          className="subtitle"
          fontSize={24}
          fontWeight={400}
          color={"#4D5254"}
          fontFamily={"Manrope, sans-serif"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubHeader;
