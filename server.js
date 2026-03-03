import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRoute from "./routes/aiRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/ai", aiRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
