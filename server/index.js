import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";

const app = express();

app.use(express.json());
//to store token inside the  browser cookies cors use 3 things origin,method and credentials
app.use(cors({
  origin: "http://localhost:5173",
  methods:['GET', 'POST', 'PUT'],
  credentials: true
}));
app.use("/auth", adminRouter);

app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});

