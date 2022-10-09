import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

dotenv.config();

let port = process.env.PORT;

const app = express();

//connecting to mongo data base using mongoose
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true }, () => {
  console.log("Connected to MONGODB");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


app.listen(port, () => {
  console.log("app listening to port " + port);
});
