import { ObjectId } from "mongodb";
import { IEmployee } from "./interfaces.js";
import { Employee } from "./models/Employee.js";

// select => welche daten sollen geholt werden
export const getEmployees = async () => {
  try {
    const employees: IEmployee[] = await Employee.find({}).select(
      `lastName firstName title notes`
    );
    if (employees.length === 0) {
      throw new Error("there is no dara");
    }
    return employees;
  } catch (error) {
    throw new Error(error);
  }
};

export const getEmployee = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const employee = await Employee.findById({ id });

      resolve({
        status: "success",
        employee,
      });
      return;
    } catch (error) {
      reject({
        status: "error",
        message: `${id} not found maybe deleted`,
      });
    }
  });
};

export const addEmployee = (employee: IEmployee) => {
  return new Promise(async (resolve, reject) => {
    try {
      const addEmployee = await Employee.create(employee);

      resolve({
        status: "success",
        newId: addEmployee._id,
        addEmployee,
      });
    } catch (error) {
      reject({
        status: "error",
        message: "check your body",
      });
    }
  });
};

export const editEmployee = (employee: IEmployee, id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const oldEmployee = await Employee.find({ _id: id });
      const editEmployee = await Employee.updateOne(
        { _id: id },
        { $set: { ...employee } }
      );
      if (Array.isArray(oldEmployee) && oldEmployee.length === 0) {
        reject({
          status: "error",
          message: `employee with ${id} not found`,
        });
      } else {
        resolve({
          status: "success",
          oldEmployee,
          editEmployee,
        });
      }
    } catch (error) {
      if (error.name === "CastError") {
        reject({
          status: "error",
          message: error.message,
        });
      } else {
        reject(error);
      }
    }
  });
};

export const deleteEmployee = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Employee.deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        resolve({
          status: "success",
          message: `item with id ${id} was deleted`,
        });
      } else {
        reject({
          status: "error",
          message: `item with id ${id} was not deleted`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getApiInstructions = () => {
  return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	a {
		color: yellow;
	}
</style>
<h1>Employees Site API</h1>
<ul>
	<li><a href="employees">/employees</a> - get all employees</li>
	
</ul>
	`;
};
