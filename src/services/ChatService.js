import axios from "axios";
import moment from "moment";
import timestampConverter from "../utils/TimestampConverter";

let chats = [
  {
    message: "hello",
    author: "alex",
    timestamp: 1598098961,
  },
  {
    message: "hello from me",
    author: "bobby",
    timestamp: 1600777361,
  },
  {
    message: "hello from me too",
    author: "charles",
    timestamp: 1603369361,
  },
  {
    message: "hello",
    author: "david",
    timestamp: 1606047761,
  },
  {
    message: "hello",
    author: "emma",
    timestamp: 1608639761,
  },
  {
    message: "hello",
    author: "frances",
    timestamp: 1611318161,
  },
];

export default class ChatService {
  static getChat(number, stamp) {
    let newChat = chats.filter((chat) => chat.timestamp > stamp);

    const chance = Math.random();

    if (chance > 0.8) {
      newChat.push({
        author: "talkative",
        message: `my new message at ${timestampConverter(moment())}`,
        timestamp: Number(moment()),
      });
    }

    return newChat;

    // return axios
    //   .get(
    //     `${process.env.REACT_APP_API_URL}?since=${stamp}&limit=${number}&token=${process.env.REACT_APP_API_TOKEN}`
    //   )
    //   .then((res) => res.data)
    //   .catch((error) => {
    //     return error;
    //   });
  }

  static getAllChat() {
    return chats;

    // return axios

    //   .get(
    //     `${process.env.REACT_APP_API_URL}?token=${process.env.REACT_APP_API_TOKEN}`
    //   )
    //   .then((res) => res.data)
    //   .catch((error) => {
    //     return error;
    //   });
  }

  static sendMessage(data) {
    chats = [...chats, { ...data, timestamp: Number(moment()) }];

    return;

    // return axios
    //   .post(`${process.env.REACT_APP_API_URL}`, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       token: `${process.env.REACT_APP_API_TOKEN}`,
    //     },
    //   })
    //   .then((res) => res.data.data)
    //   .catch((error) => {
    //     return error;
    //   });
  }
}
