import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Stepper.scss";

const steps = ["Cart Reviews", "Checkout", "Special Offer", "Confirmation"];
export default function StepperDetail() {
  return (
    <Box
      className="stepper"
      sx={{
        width: "100%",
        paddingLeft: "120px",
        paddingRight: "120px",
        marginTop: "50px",
      }}
    >
      <Stepper
        activeStep={1}
        connector={false}
        sx={{
          "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "#85BF55", // Change this color for active steps to green
          },
          "& .MuiStepIcon-root": {
            color: "#85BF55", // Change this color for inactive steps to red
          },
          display: "flex",
          fontFamily: "Manrope, sans-serif",
          justifyContent: "space-between",
        }}
      >
        {steps.map((label, index) => {
          const labelProps = {};
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
