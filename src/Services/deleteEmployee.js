import axios from "axios";
import React from "react";

const deleteEmployee = async (
  employeeListUpdated,
  setEmployeeListUpdated,
  id
) => {
  const API_URL = "http://localhost:9000/employees";
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log();
    setEmployeeListUpdated(!employeeListUpdated);
  } catch (error) {
    console.error(error);
  }
};

export default deleteEmployee;
