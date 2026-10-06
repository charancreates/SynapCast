import "dotenv/config";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";

connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Errrr: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("app is listening on port ", process.env.PORT);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
