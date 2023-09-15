import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import userpic from "../../assets/Rectangle 1127.png";
import verifypic from "../../assets/verify 1.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function FeedbackCard() {
  const [value, setValue] = React.useState(2);
  return (
    <Card sx={{ minWidth: 275, mt: "32px", border: "none", boxShadow: "none" }}>
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Box>
            <img src={userpic} alt="logo" />
          </Box>
          <Box sx={{ ml: "10px" }}>
            <Rating
              name="simple-controlled"
              value={value}
              size="small"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Box sx={{ display: "flex" }}>
              <Typography fontFamily={"Manrope, sans-serif"}>Ken T.</Typography>

              <img
                src={verifypic}
                alt="logo"
                style={{ height: "20px", width: "20px", marginLeft: "5px" }}
              />
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"#5BB59A"}
                ml={1}
                mt={0.5}
                fontFamily={"Manrope, sans-serif"}
              >
                Verified Customer
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="body2" fontFamily={"Manrope, sans-serif"}>
          “As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </Typography>
      </CardContent>
    </Card>
  );
}
