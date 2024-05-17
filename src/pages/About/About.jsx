import React from "react"
import CustomText from "../../component/CustomText/CustomText"
import CustomTable from "../../component/CustomTable";
const About = () => {
  const table_headers = ["First Name", "Last Name", "Username"]; // Array of strings
  const table_data = [
    {
      "fName": "Mark",
      "lName": "Otto",
      "username": "@mdo",
    },
    {
      "fName": "John",
      "lName": "Jr",
      "username": "@johnjr",
    }
  ]; // Array of objects
  return (
    <>
      <CustomText label={"Our team"} />
      <CustomTable headers={table_headers} data={table_data} />
    </>
  )
};

export default About;