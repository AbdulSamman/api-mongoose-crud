import * as model from "./model.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { IEmployee } from "./interfaces.js";

dotenv.config();

/* Fehler Meldung
[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
listening on port http://localhost:3610
mongoose.set("strictQuery",false)
// you need the strictQuery in order to get around a deprecated issue, remove it to  see the message
*/
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_CONNECT);

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiInstructions());
});
// PROMISE, await oder promise
app.get("/employees", async (req: express.Request, res: express.Response) => {
  const employees: IEmployee[] = await model.getEmployees();
  res.status(200).json(employees);
});

app.get(
  "/employee/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      const getEmployee = await model.getEmployee(id);
      res.status(200).json(getEmployee);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

app.post("/employee", async (req: express.Request, res: express.Response) => {
  try {
    const employee: IEmployee = req.body;
    res.status(200).json(await model.addEmployee(employee));
  } catch (error) {
    res.status(500).send(error);
  }
});
app.patch(
  "/employee/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      const employee: IEmployee = req.body;
      const result = await model.editEmployee(employee, id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

app.delete(
  "/employee/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      res.status(200).json(await model.deleteEmployee(id));
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
