import axios from "axios";

export default class ChatService {
  static getChat(number, stamp) {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}?since=${stamp}&limit=${number}&token=${process.env.REACT_APP_API_TOKEN}`
      )
      .then((res) => res.data)
      .catch((error) => {
        return error;
      });
  }

  static getAllChat() {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}?token=${process.env.REACT_APP_API_TOKEN}`
      )
      .then((res) => res.data)
      .catch((error) => {
        return error;
      });
  }

  static sendMessage(data) {
    return axios
      .post(`${process.env.REACT_APP_API_URL}`, data, {
        headers: {
          "Content-Type": "application/json",
          token: `${process.env.REACT_APP_API_TOKEN}`,
        },
      })
      .then((res) => res.data.data)
      .catch((error) => {
        return error;
      });
  }
}
