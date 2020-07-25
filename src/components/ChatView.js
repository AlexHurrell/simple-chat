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
  const [noScroll, setNoScroll] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  const getData = async () => {
    let data = await ChatService.getChat();
    setMessages([
      {
        _id: "5d518cebc3b118001c41edcc",
        message: "New message",
        author: "me",
        timestamp: 1565625579826,
      },
      {
        _id: "5d518f72c3b118001c41edcd",
        message: "First real message from Mihailo",
        author: "me",
        timestamp: 1565626226370,
      },
      {
        _id: "5d518f93c3b118001c41edce",
        message: "Another First real message from Mihailo",
        author: "me",
        timestamp: 1565626259317,
      },
      {
        _id: "5d518fbac3b118001c41edcf",
        message: "NOW WERE ROCKING!!!",
        author: "me",
        timestamp: 1565626298144,
      },
      {
        _id: "5d5190a2c3b118001c41edd0",
        message: "Now for real :D",
        author: "Mihailo",
        timestamp: 1565626530557,
      },
      {
        _id: "5d5190c6c3b118001c41edd1",
        message: "sadsadsa",
        author: "Mihailo",
        timestamp: 1565626566448,
      },
      {
        _id: "5d5190f0c3b118001c41edd2",
        message: "jao jao jao, ala radi",
        author: "Mihailo",
        timestamp: 1565626608973,
      },
      {
        _id: "5d519149c3b118001c41edd3",
        message: "adsadsad",
        author: "Mihailo",
        timestamp: 1565626697549,
      },
      {
        _id: "5d519174c3b118001c41edd4",
        message: "test with fetching messages again immediately",
        author: "Mihailo",
        timestamp: 1565626740703,
      },
      {
        _id: "5d519182c3b118001c41edd5",
        message: "de si comi",
        author: "Mihailo",
        timestamp: 1565626754246,
      },
      {
        _id: "5d519353c3b118001c41edd6",
        message: "Testing scrolling",
        author: "Mihailo",
        timestamp: 1565627219996,
      },
      {
        _id: "5d51935cc3b118001c41edd7",
        message: "another scroll test",
        author: "Mihailo",
        timestamp: 1565627228340,
      },
      {
        _id: "5d5193bac3b118001c41edd8",
        message: "another scroll test",
        author: "Mihailo",
        timestamp: 1565627322514,
      },
      {
        _id: "5d5193bfc3b118001c41edd9",
        message: "asdasdsad",
        author: "Mihailo",
        timestamp: 1565627327279,
      },
      {
        _id: "5d5193d8c3b118001c41edda",
        message: "test",
        author: "Mihailo",
        timestamp: 1565627352882,
      },
      {
        _id: "5d5193ddc3b118001c41eddb",
        message: "asd",
        author: "Mihailo",
        timestamp: 1565627357321,
      },
      {
        _id: "5d5193e1c3b118001c41eddc",
        message: "asdasdasd",
        author: "Mihailo",
        timestamp: 1565627361335,
      },
      {
        _id: "5d519563c3b118001c41eddd",
        message: "cao comi",
        author: "Mihailo",
        timestamp: 1565627747967,
      },
      {
        _id: "5d519567c3b118001c41edde",
        message: "ajajajaja",
        author: "Mihailo",
        timestamp: 1565627751123,
      },
      {
        _id: "5d51958ac3b118001c41eddf",
        message: "cao cao comika",
        author: "Mihailo",
        timestamp: 1565627786074,
      },
      {
        _id: "5d5196cdc3b118001c41ede0",
        message: "nova poruka",
        author: "Mihailo",
        timestamp: 1565628109047,
      },
      {
        _id: "5d519706c3b118001c41ede1",
        message: "nova nova poruka",
        author: "Mihailo",
        timestamp: 1565628166226,
      },
      {
        _id: "5d51971fc3b118001c41ede2",
        message: "jao jao jao, ala radi",
        author: "Mihailo",
        timestamp: 1565628191759,
      },
      {
        _id: "5d519902c3b118001c41ede3",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        author: "Mihailo",
        timestamp: 1565628674626,
      },
      {
        _id: "5d519966c3b118001c41ede4",
        message: "asd",
        author: "Mihailo",
        timestamp: 1565628774233,
      },
      {
        _id: "5d519e80c3b118001c41ede5",
        message: "alalalalal",
        author: "Mihailo",
        timestamp: 1565630080723,
      },
      {
        _id: "5d519f60c3b118001c41ede6",
        message: "o",
        author: "Mihailo",
        timestamp: 1565630304883,
      },
      {
        _id: "5d51a399c3b118001c41ede7",
        message: "asdasdasd",
        author: "Mihailo",
        timestamp: 1565631385441,
      },
      {
        _id: "5d51a692c3b118001c41ede8",
        message: "nova poruka za mog kuma",
        author: "Mihailo",
        timestamp: 1565632146550,
      },
      {
        _id: "5d529bfac3b118001c41ede9",
        message: "dddas",
        author: "Mihailo",
        timestamp: 1565694970817,
      },
      {
        _id: "5d540cdbc3b118001c41edea",
        message: "jjj",
        author: "Mihailo",
        timestamp: 1565789403228,
      },
    ]);
  };

  const getUpdatedData = async () => {
    let data = await ChatService.getChat(10, messages[0]);
    let present = messages.map((d) => d._id);
    let merged = [...messages, ...data.filter((d) => !present.indexOf(d))];
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input !== "") {
      await ChatService.sendMessage();
      let data = await ChatService.getChat(10);
      let present = messages.map((d) => d._id);
      let merged = [
        ...messages,
        ...data.filter((d) => !present.includes(d._id)),
      ];
      setMessages(merged);
      setInput("");
    }
  };

  const handleScroll = async (e) => {
    if (e.target.scrollTop === 0) {
      setNoScroll(true);
      setLoading(true);
      let data = await ChatService.getChat();
      let newMessages = [...data, ...messages];
      setMessages([...newMessages]);
    }
  };

  useEffect(() => {
    setLoading(false);
    if (noScroll === false) {
      divRef.current.scrollIntoView();
    } else {
      setNoScroll(false);
    }
  }, [messages]);

  useEffect(() => {
    setLoading(true);
    getData();

    const interval = setInterval(() => {
      getUpdatedData();
      console.log("get data every 2 seconds");
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
              handleScroll={handleScroll}
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
