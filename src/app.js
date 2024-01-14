import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import colors from "@colors/colors";

import "./db/database.js";

const app = express();
colors.enable();

app.use(morgan("combined"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
