import React from "react";
import Box from "@material-ui/core/Box";
import Message from "./Message";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  positionLeft: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  positionRight: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "left",
  },
}));

const MessagesView = (props) => {
  const classes = useStyles();

  return (
    <Box style={{ height: "75%" }}>
      <Box
        onScroll={props.handleScroll}
        px={3}
        py={3}
        style={{
          height: "100%",
          boxSizing: "border-box",
          backgroundImage: `url(${"./body.png"})`,
          overflowY: "scroll",
        }}
      >
        {props.messages.map((message) => (
          <Box
            key={message._id}
            width={1}
            m={1}
            className={
              message.author === props.user
                ? classes.positionRight
                : classes.positionLeft
            }
            style={{ display: "flex" }}
          >
            <Message
              message={message.message}
              author={message.author}
              timestamp={message.timestamp}
              user={props.user}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MessagesView;
