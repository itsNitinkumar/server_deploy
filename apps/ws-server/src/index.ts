import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send("Welcome to WS server (TypeScript)!");

  ws.on("message", (msg) => {
    console.log("Received:", msg.toString());
    ws.send(`Echo: ${msg}`);
  });
});

console.log("WebSocket server running on port 3001");
