import io from "socket.io-client";

export default class QuotesService {
  constructor() {
    this.socket = io.connect("ws://localhost:4000");
    this.socket.emit("start");
  }

  fetchData(handler) {
    this.socket.on("ticker", (response) => handler(response));
  }
}
