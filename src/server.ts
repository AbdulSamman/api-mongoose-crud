import * as model from "./model.js";
import express from "express";
import cors from "cors";
import * as config from "./config.js";
import mongoose from "mongoose";

/* Fehler Meldung
(node:284600) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
listening on port http://localhost:3610
mongoose.set("strictQuery",false)
*/
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://localhost/northwind`);

const app = express();
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiInstructions());
});
// PROMISE, await oder promise
app.get("/employees", async (req: express.Request, res: express.Response) => {
  const employees = await model.getEmployees();
  res.json(employees);
});

app.listen(config.port, () => {
  console.log(`listening on port http://localhost:${config.port}`);
});
