import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use("/", usersRoutes);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(port, () =>console.log(`Server running on port: http://localhost:${port}`));