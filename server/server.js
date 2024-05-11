require("dotenv").config();
const express = require("express");
const CORS = require("cors");
const connectDB = require("./utils/db");

const app = express();
const PORT = 8000;
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials: true,
};

app.use(CORS(corsOptions));

const auth_router = require("./router/auth-router");
const auth_contact = require("./router/contact-router");
const errorMiddleware = require("./validator/error-validator");
const adminrouter = require("./router/auth-routerAdmin");

app.use(express.json());

app.use("/", auth_router);
app.use("/", auth_contact);
app.use("/admin", adminrouter);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server as Started");
  });
});
