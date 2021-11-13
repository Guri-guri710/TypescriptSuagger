import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/task.routes";

//express Method
const app = express();

//settings
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);

//listening post
app.set("port", process.env.PORT || 3000);

export default app;
