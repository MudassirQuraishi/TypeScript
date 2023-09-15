import express from "express";
import bodyParser from "body-parser";
import todosRoute from "./Routes/todoroutes";

const app = express();
app.use(bodyParser.json());
app.use(todosRoute);

app.listen(1000);
