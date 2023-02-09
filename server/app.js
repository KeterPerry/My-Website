import express from "express";
export const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes/projects.js";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/projects", router);
