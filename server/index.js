import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import bidRoute from "./bidModel/BidRoutes.js"; // Ensure this path is correct

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8001;
const mongourl = process.env.MONGOURL;

mongoose.set("strictQuery", false); // Setting the strictQuery to false

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use("/api/user", userRoute);
app.use("/api/products", bidRoute);
