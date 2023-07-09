import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getBloodCollection } from "./employeeServices";
import axios from "axios";

function GetAllEmployees(employeeListUpdated) {
  const [employees, setEmployees] = useState([]);
  const API_URL = "http://localhost:9000/employees";
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeListUpdated]);

  const bloods = getBloodCollection();

  const employeesWithBlood = employees.map((x) => ({
    ...x,
    blood: bloods[x.bloodId - 1]?.title,
  }));

  return employeesWithBlood;
}

export default GetAllEmployees;
