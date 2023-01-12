import { Employee } from "./models/Employee.js";

// select => welche daten sollen geholt werden
export const getEmployees = async () => {
  try {
    const employees = await Employee.find().select(
      `firstName lastName title notes`
    );
    if (employees.length === 0) {
      throw new Error("currently no data");
    }
    return employees;
  } catch (error) {
    throw new Error(error);
  }
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
