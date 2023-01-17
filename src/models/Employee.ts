/* 
import mongoose from "mongoose";

 const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  title: String,
  notes: String,
});

export const Employee = mongoose.model("employee", employeeSchema);

oder so, da schema und model from mongoose sind
*/

import { Schema, model } from "mongoose";
import { IEmployee } from "../interfaces.js";

const employeeSchema = new Schema<IEmployee>({
  firstName: String,
  lastName: String,
  title: String,
  notes: String,
});

export const Employee = model("employee", employeeSchema);
