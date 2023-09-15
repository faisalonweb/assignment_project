import React from "react";
import { Box, Typography } from "@mui/material";
import fluentarrow from "../../assets/fluent_arrow-sync-checkmark-20-regular.png";
import { isMobile } from "react-device-detect";
import trucklight from "../../assets/ph_truck-light.png";
import heartcard from "../../assets/mdi_cards-heart-outline.png";
import fluentstarburst from "../../assets/fluent_checkmark-starburst-20-regular.png";
import forwardicon from "../../assets/Layer_1.png";
import backicon from "../../assets/Layer_1 (1).png";

const Header = () => {
  return (
    <Box sx={{ height: "50px", width: "100%", backgroundColor: "#252F3D" }}>
      <Box
        sx={{
          paddingLeft: isMobile ? "65px" : "120px",
          paddingRight: isMobile ? "77px" : "120px",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "13px",
        }}
      >
        {isMobile ? (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <img
                src={forwardicon}
                alt="logo"
                style={{ marginRight: "3px" }}
              />
              <Box sx={{ display: "flex" }}>
                {" "}
                <img
                  src={fluentarrow}
                  alt="logo"
                  style={{ marginRight: "3px" }}
                />
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
                  30-DAY SATISFACTION GUARANTEE
                </Typography>
              </Box>
              <img src={backicon} alt="logo" style={{ marginRight: "3px" }} />
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex" }}>
              {" "}
              <img
                src={fluentarrow}
                alt="logo"
                style={{ marginRight: "3px" }}
              />
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
                30-DAY SATISFACTION GUARANTEE
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {" "}
              <img src={trucklight} alt="logo" style={{ marginRight: "3px" }} />
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
                Free delivery on orders over $40.00
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {" "}
              <img src={heartcard} alt="logo" style={{ marginRight: "3px" }} />
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
                50.000+ HAPPY CUSTOMERS
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {" "}
              <img
                src={fluentstarburst}
                alt="logo"
                style={{ marginRight: "3px" }}
              />
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
                100% Money Back Guarantee
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
