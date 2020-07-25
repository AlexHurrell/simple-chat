import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TimestampConverter from "../utils/TimestampConverter";

const Message = (props) => {
  return (
    <Paper
      style={
        props.author === props.user
          ? { backgroundColor: "#FAFAD2", maxWidth: "80%" }
          : { maxWidth: "80%" }
      }
    >
      <Box m={1}>
        {props.author === "me" ? (
          ""
        ) : (
          <Typography
            variant="body1"
            style={{ color: "#40769F", fontWeight: "bold" }}
          >
            {props.author}
          </Typography>
        )}
        <Typography variant="body2">{props.message}</Typography>
        <Box style={props.author === props.user ? { float: "right" } : {}}>
          <Typography variant="caption">
            {TimestampConverter(props.timestamp)}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Message;
