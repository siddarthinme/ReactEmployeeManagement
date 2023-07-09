import axios from "axios";
import React, { useEffect } from "react";

const addEmployee = async (
  values,
  employeeListUpdated,
  setEmployeeListUpdated
) => {
  const API_URL = "http://localhost:9000/employees";
  try {
    const response = await axios.post(API_URL, values);
    console.log(response.data);
    setEmployeeListUpdated(!employeeListUpdated);
  } catch (error) {
    console.error(error);
  }
};

export default addEmployee;
