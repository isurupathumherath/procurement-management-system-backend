import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/dbConnect.js";

import apiRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("All systems up and running!");
});

export default app;
