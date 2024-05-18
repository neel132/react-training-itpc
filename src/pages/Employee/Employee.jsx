import React, { useEffect, useState } from "react";
import CustomTable from "../../component/CustomTable"
import { getEmployee } from "../../api/employeeApi";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const headers = ["Name", "Salary", "Age", "Profile Image"];
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
  return (
    <CustomTable headers={headers} data={employeeData} />
  )
};
export default Employee;