import { io } from "socket.io-client";

const socket = io("https://bitey-backend.onrender.com", {
  transports: ["websocket", "polling"]
});

export default socket;