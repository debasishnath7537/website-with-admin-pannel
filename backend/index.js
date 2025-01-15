import express from "express";
import cors from "cors";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import serviceRouter from "./router/service-router.js";
import adminRouter from "./router/admin-router.js";
import connectDb from "./utilities/db.js";
import errorMiddleware from "./middleware-validate/error-middleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://webappwithadminpanel.netlify.app/",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); //express middleware that parses imcoming request body with json payload

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

app.use("/api/admin", adminRouter);
// app.use("/api/admin", adminRouter);
const port = process.env.PORT || 5000;

app.use(errorMiddleware);
connectDb().then(() => {
  app.listen(port, () => {
    console.log("Serving is running on Port 5000");
  });
});
