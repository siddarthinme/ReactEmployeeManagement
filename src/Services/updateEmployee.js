import axios from "axios";
import React from "react";

const updateEmployee = async (
  values,
  employeeListUpdated,
  setEmployeeListUpdated
) => {
  const API_URL = "http://localhost:9000/employees";
  try {
    const response = await axios.put(`${API_URL}/${values.id}`, values, [
      employeeListUpdated,
    ]);
    console.log(response);
    setEmployeeListUpdated(!employeeListUpdated);
  } catch (error) {
    console.error(error);
  }
};

export default updateEmployee;
