import "dotenv/config";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running at port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
    process.exit(1);
  });

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
