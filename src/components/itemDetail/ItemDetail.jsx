import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { isMobile } from "react-device-detect";
import removebgicon from "../../assets/image-removebg-preview (12) 1.png";
import ithicon from "../../assets/$180.png";
import ellipse from "../../assets/Ellipse 95.png";
import tickicon from "../../assets/tick-circle.png";
import seticon from "../../assets/Group 1000004656.png";
import frame136 from "../../assets/Frame 136.png";
import group6 from "../../assets/Group 6.png";
import group7 from "../../assets/Group 7.png";
import group8 from "../../assets/Group 8.png";
import group10 from "../../assets/Group 10.png";
import group13 from "../../assets/Group 13.png";
import image6 from "../../assets/image 6.png";
import "./ItemDetail.scss";

const ItemDetail = () => {
  const [value, setValue] = React.useState(2);
  return (
    <Box
      className="item-detail"
      sx={{
        fontSize: isMobile ? "24px" : "32px",
        fontWeight: "400",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <span style={{ color: "#2C7EF8" }}>ONE TIME ONLY</span> special price for
      6 extra Clarifion for only{" "}
      <span style={{ color: "#2C7EF8" }}>$14 each</span>
      ($84.00 total!)
      <Grid container spacing={isMobile ? 0 : 2} sx={{ mt: "32px" }}>
        <Grid
          item
          xs={4}
          sx={{ display: isMobile ? "flex" : "", justifyContent: "center" }}
        >
          {" "}
          <Box>
            <img src={removebgicon} alt="logo" height={157} width={157} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography fontSize={isMobile ? 14 : 20} fontWeight={400}>
                    Clarifion Air Ionizer
                  </Typography>
                  <Box>
                    <Box>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <img
                        src={ellipse}
                        alt="logo"
                        height={10}
                        width={10}
                        style={{ marginTop: "6px" }}
                      />
                      <Typography
                        fontSize={isMobile ? 12 : 16}
                        fontWeight={300}
                        color={"#37465A"}
                      >
                        12 left is Stock
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize={isMobile ? 14 : 16}
                        fontWeight={400}
                        color={"#4D5254"}
                      >
                        Simply plug a Clarifion into any standard outlet and
                        replace bulky, expensive air purifiers with a simple.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <img
                    src={ithicon}
                    alt="logo"
                    height={10}
                    width={35}
                    style={{ marginTop: "10px" }}
                  />
                  <Typography
                    sx={{
                      color: "#2C7EF8",
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  >
                    45$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "32px",
          // alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            fontSize: isMobile ? "12px" : "16px",
            fontWeight: "400",
            color: "#4D5254",
          }}
        >
          <img
            src={tickicon}
            alt="logo"
            style={{ marginTop: "10px" }}
            height={20}
            width={20}
          />
          <span
            style={{ marginLeft: "10px", fontSize: isMobile ? "12px" : "16px" }}
          >
            Negative Ion Technology may{" "}
            <span
              style={{
                fontSize: isMobile ? "12px" : "16px",
                fontWeight: "700",
                color: "#4D5254",
              }}
            >
              help with allergens
            </span>
          </span>
        </Box>
        <Box sx={{ fontSize: "16px", fontWeight: "400", color: "#4D5254" }}>
          <img
            src={tickicon}
            alt="logo"
            style={{ marginTop: "10px" }}
            height={20}
            width={20}
          />
          <span
            style={{ marginLeft: "10px", fontSize: isMobile ? "12px" : "16px" }}
          >
            Designed for
            <span
              style={{
                fontSize: isMobile ? "12px" : "16px",
                fontWeight: "700",
                color: "#4D5254",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              air rejuvenation
            </span>
          </span>
        </Box>
        <Box
          sx={{
            fontSize: isMobile ? "12px" : "16px",
            fontWeight: "400",
            color: "#4D5254",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <img
            src={tickicon}
            alt="logo"
            style={{ marginTop: "10px" }}
            height={20}
            width={20}
          />
          <span style={{ marginLeft: "10px" }}>
            <span
              style={{
                fontSize: isMobile ? "12px" : "16px",
                fontWeight: "700",
                color: "#4D5254",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Perfect for every room
            </span>
            in all types of places.
          </span>
        </Box>
      </Box>
      <Box
        sx={{
          height: isMobile ? "64px" : "56px",
          borderRadius: "20px",
          backgroundColor: "#EDF3FD",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "32px",
        }}
      >
        <img
          src={seticon}
          alt="logo"
          style={{ marginRight: isMobile ? "0px" : "15px" }}
          marginLeft={isMobile ? "2px" : "0px"}
          height={isMobile && 24}
          width={isMobile && 24}
        />
        <Typography
          fontSize={isMobile ? 12 : 16}
          fontWeight={400}
          fontFamily={"Manrope, sans-serif"}
          marginLeft={isMobile ? "7px" : "0px"}
        >
          {" "}
          Save 53% and get 6 extra Clarifision for only $14 Each.{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "56px",
          borderRadius: "20px",
          backgroundColor: "#59AE43",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "32px",
        }}
      >
        <img
          src={frame136}
          alt="logo"
          style={{ marginRight: "15px", height: isMobile && "19px" }}
        />
      </Box>
      {isMobile ? (
        <Box
          sx={{
            height: isMobile ? "71px" : "36px",
            border: "1px solid #CFCFCF",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography
              fontSize={12}
              fontWeight={400}
              mt={1}
              fontFamily={"Manrope, sans-serif"}
            >
              Free Shipping
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography
              fontSize={12}
              fontWeight={400}
              mt={1}
              fontFamily={"Manrope, sans-serif"}
            >
              Secure 256-bit SSL encryption.
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "space-around",
            }}
          >
            <Box>
              <img src={group6} alt="logo" height={15} width={15} />
            </Box>
            <Box mr={3}>
              <img src={group7} alt="logo" height={15} width={15} />
            </Box>
            <Box mr={3}>
              <img src={group8} alt="logo" height={15} width={15} />
            </Box>
            <Box mr={3}>
              <img src={group10} alt="logo" height={15} width={15} />
            </Box>
            <Box mr={3}>
              <img src={group13} alt="logo" height={15} width={15} />
            </Box>
            <Box mr={3}>
              <img src={group6} alt="logo" height={15} width={15} />
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              height: "36px",
              border: "1px solid #CFCFCF",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              fontSize={12}
              fontWeight={400}
              mt={1}
              fontFamily={"Manrope, sans-serif"}
            >
              Free Shipping
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography
              fontSize={12}
              fontWeight={400}
              mt={1}
              fontFamily={"Manrope, sans-serif"}
            >
              Secure 256-bit SSL encryption.
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <img src={group6} alt="logo" height={15} width={15} />
              </Box>
              <Box mr={3}>
                <img src={group7} alt="logo" height={15} width={15} />
              </Box>
              <Box mr={3}>
                <img src={group8} alt="logo" height={15} width={15} />
              </Box>
              <Box mr={3}>
                <img src={group10} alt="logo" height={15} width={15} />
              </Box>
              <Box mr={3}>
                <img src={group13} alt="logo" height={15} width={15} />
              </Box>
              <Box mr={3}>
                <img src={group6} alt="logo" height={15} width={15} />
              </Box>
            </Box>
          </Box>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "10px",
        }}
      >
        <Typography
          fontSize={isMobile ? 12 : 18}
          fontWeight={500}
          color={"#F82C2C"}
          fontFamily={"Manrope, sans-serif"}
        >
          No thanks, I don’t want this.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", mt: "24px" }}>
        <Box>
          {" "}
          <img src={image6} alt="logo" />
        </Box>
        <Typography
          fontSize={isMobile ? 12 : 16}
          fontWeight={400}
          ml={2}
          fontFamily={"Manrope, sans-serif"}
        >
          If you are not completely thrilled with your Clarifion - We have a 30
          day satisfaction guarantee. Please refer to our return policy at the
          bottom of the page for more details. Happy Shopping!
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemDetail;
