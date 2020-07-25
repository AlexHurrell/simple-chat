export default class ChatService {
    static getChat(number, stamp) {
      return new Promise((resolve) => {
        setTimeout(() => {
        resolve([
          {
            _id: "5d51a399c3b118001c41ede7",
            message: "asdasdasd",
            author: "Mih",
            timestamp: 1565631385441
          },
          {
            _id: "5d51a692c3b118001c41edeee",
            message: "nova poruka za mog kuma",
            author: "Mih",
            timestamp: 1565632146550
          },
          {
            _id: "5d529bfac3b118001c41edehe",
            message: "dddas",
            author: "Mih",
            timestamp: 1565694970817
          },
          {
            _id: "5d540cdbc3b118001c41edeheee",
            message: "jjj",
            author: "Mih",
            timestamp: 1565789403228
          },
        ]);
    }, 500);
      });
    }
  
    static sendMessage(body) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World!");
        }, 500);
      });
    }
  }
  