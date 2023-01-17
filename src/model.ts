import { Employee } from "./models/Employee.js";

// select => welche daten sollen geholt werden
export const getEmployees = async () => {
  return [
    {
      firstName: "nnn",
    },
    { firstName: "asda" },
  ];
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
