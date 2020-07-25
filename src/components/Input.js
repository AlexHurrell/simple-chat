import React from "react";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import SendIcon from "@material-ui/icons/Send";

const InputBar = (props) => {
  return (
    <Box
      px={3}
      style={{
        height: "15%",
        display: "grid",
        alignItems: "center",
        backgroundColor: "#FEFEFE",
      }}
    >
      <form name="inputBox" onSubmit={props.handleSubmit}>
        <Grid container alignItems="center" justify="center">
          <Hidden smDown>
            {" "}
            <Grid item xs={10}>
              <TextField
                style={{ width: "100%" }}
                variant="outlined"
                size="small"
                onChange={props.handleChange}
                color="white"
                placeholder="Type a message"
                value={props.input}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#517D0F",
                  color: "#FFF",
                  height: "100%",
                }}
              >
                SEND
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            {" "}
            <Grid item xs={10}>
              <TextField
                style={{ width: "100%" }}
                variant="outlined"
                size="small"
                onChange={props.handleChange}
                value={props.input}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit">
                <SendIcon style={{ color: "#517D0F" }} />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </form>
    </Box>
  );
};

export default InputBar;
