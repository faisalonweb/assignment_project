import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeedbackCard from "../feedbackCard/FeedbackCard";
import clartonlogo from "../../assets/image4.png";
import ItemDetail from "../itemDetail/ItemDetail";
import { isMobile } from "react-device-detect";
import "./Card.scss";

const Card = () => {
  console.log(isMobile);
  return (
    <Box
      sx={{
        marginRight: "120px",
        marginLeft: "120px",
        marginTop: "50px",
        marginBottom: "50px",
        height: isMobile ? "auto" : "879px",
        backgroundColor: "#FAFAFA",
        borderRadius: "20px",
      }}
      className="card"
    >
      <Grid
        className="grid-cls"
        container
        spacing={isMobile ? 1 : 2}
        sx={{ padding: "40px" }}
      >
        {isMobile ? (
          <>
            <Grid item sm={12} md={6}>
              <ItemDetail />
            </Grid>
            <Grid item className="grid-cls-item" sm={12} md={6}>
              <img
                className="main-icon"
                src={clartonlogo}
                alt="logo"
                style={{ objectFit: "cover", height: "591px" }}
              />
              <FeedbackCard />
            </Grid>
          </>
        ) : (
          <>
            <Grid item className="grid-cls-item" sm={12} md={6}>
              <img
                className="main-icon"
                src={clartonlogo}
                alt="logo"
                style={{ objectFit: "cover", height: "591px" }}
              />
              <FeedbackCard />
            </Grid>
            <Grid item sm={12} md={6}>
              <ItemDetail />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Card;
