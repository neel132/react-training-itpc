import React, { useEffect, useState } from "react";
import CustomTable from "../../component/CustomTable"
import { createEmployee, getEmployee } from "../../api/employeeApi";
import { Button, Form } from "react-bootstrap";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const headers = ["Emp Id", "Name", "Salary", "Age", "Profile Image"];
  useEffect(() => {
    fetchEmployeeData();
  }, []);// If Empty array, then useEffect will run only once after the page load
  const fetchEmployeeData = async() => {
    const response = await getEmployee();
    console.log("Response -", response);
    if(response.length > 0) {
      setEmployeeData(response);
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const salary = e.target[1].value;
    const age = Number(e.target[2].value);
    console.log(name, salary, age);
    if(name.length > 0 && salary.length > 0 && age > 0) {
      const result = await createEmployee({
        name: name,
        salary: salary,
        age: `${age}`
      });
      console.log('result -', result);
      if(result && result.id) {
        // setEmployeeData([...employeeData, result]);
        const data = employeeData.push(result);
        setEmployeeData(data);
      }
    }
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="emp_name">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="emp_salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="emp_age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <CustomTable headers={headers} data={employeeData} />
    </>
  )
};
export default Employee;