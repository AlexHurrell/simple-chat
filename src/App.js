import React from "react";
import "./App.css";
import ChatView from "./components/ChatView";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const font = "'Fira Sans', sans-serif";

const theme = createMuiTheme({
  fontFamily: font,
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatView />
      </ThemeProvider>
    </div>
  );
}

export default App;
