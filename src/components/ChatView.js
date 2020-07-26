import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Input from "./Input";
import Title from "./Title";
import MessagesView from "./MessagesView";
import ChatService from "../services/ChatService";

const ChatView = () => {
  const divRef = useRef(null);
  const [user, setUser] = React.useState("me");
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [noScroll, setNoScroll] = React.useState(false);

  //get messages at start
  const getInitialData = async () => {
    try {
      let data = await ChatService.getAllChat();
      if (!(data instanceof Array)) {
        setLoading(true);
      } else {
        setMessages(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //allows set interval access to current messages
  const getCurrentMessages = async (setMessages) => {
    setNoScroll(true);
    return new Promise((resolve) => {
      setMessages((prev) => {
        resolve(prev);
        return prev;
      });
    });
  };

  //get 10 messages
  const getUpdatedData = async () => {
    try {
      let currentMessages = await getCurrentMessages(setMessages);
      let data = await ChatService.getChat(
        10,
        currentMessages[currentMessages.length - 1].timestamp
      );
      const newMessages = [...currentMessages, ...data];
      if (data.length !== 0) {
        setNoScroll(false);
      }
      setMessages(newMessages);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input !== "") {
      let body = {
        message: input,
        author: "me",
      };
      try {
        await ChatService.sendMessage(body);
        let data = await ChatService.getChat(
          5,
          messages[messages.length - 1].timestamp
        );
        const newMessages = [...messages, ...data];
        setNoScroll(false);
        setMessages(newMessages);
        setInput("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  //Scroll to the bottom at initilisation and new message, otherwise stay at top
  useEffect(() => {
    setLoading(false);
    if (noScroll === false) {
      divRef.current.scrollIntoView();
    }
  }, [messages]);

  //Get any new messages every 2 seconds.
  useEffect(() => {
    setLoading(true);
    getInitialData();

    const interval = setInterval(() => {
      getUpdatedData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Box style={{ height: "100vh" }}>
        <Box style={{ height: "100%", boxSizing: "border-box", padding: "5%" }}>
          <Paper style={{ height: "100%" }}>
            <Title></Title>

            <MessagesView
              messages={messages}
              user={user}
              divRef={divRef}
              loading={loading}
            />

            <Input
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ChatView;
