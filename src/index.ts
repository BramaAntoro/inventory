import express from "express";
import { HOST, PORT } from "./config/env.js";
import v1Routes from "./routes/v1.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

app.use("/api/v1", v1Routes)
app.use(errorHandler)

