import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const Title = () => {
  return (
    <Box
      style={{
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEFEFE",
      }}
    >
      <Typography variant="h4" style={{ color: "#40769F", fontWeight: "bold" }}>
        Simple Chat
      </Typography>
    </Box>
  );
};

export default Title;
