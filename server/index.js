import http from "http";
import { dbConnection } from "./dbConnection/dbConnection.js";
import { app } from "./app.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
