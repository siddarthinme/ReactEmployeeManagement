import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import PeopleIcon from "@mui/icons-material/People";
import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import Control from "../../Controls/Control";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import useTable from "../../Components/useTable";
import { useState } from "react";
import GetAllEmployees from "../../Services/getAllEmployee";
import Popup from "../../Components/Popup";
import addEmployee from "../../Services/addEmployee";
import updateEmployee from "../../Services/updateEmployee";
import { InputAdornment } from "@mui/material";
import deleteEmployee from "../../Services/deleteEmployee";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "50%",
    marginRight: "520px",
  },
}));

const headCells = [
  { id: "id", label: "ID" },
  { id: "gender", label: "Gender" },
  { id: "fullName", label: "Full Name" },
  { id: "phone", label: "Phone" },
  { id: "mail", label: "Email" },
  { id: "birthday", label: "Birthday" },
  { id: "blood", label: "Blood" },
  { id: "address", label: "Address" },
  { id: "emergency", label: "Emergency Contact Details" },
  { id: "", label: "" },
];

function Employees() {
  const classes = useStyles();
  const [employeeListUpdated, setEmployeeListUpdated] = useState(false);
  const employees = GetAllEmployees(employeeListUpdated);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPaging } = useTable(
    employees,
    headCells,
    filterFn
  );

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      addEmployee(employee, employeeListUpdated, setEmployeeListUpdated);
    } else {
      updateEmployee(employee, employeeListUpdated, setEmployeeListUpdated);
    }
    setRecordForEdit(null);
    resetForm();
    setOpenPopup(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      deleteEmployee(employeeListUpdated, setEmployeeListUpdated, id);
    }
  };

  const openInPopup = (employee) => {
    setRecordForEdit(employee);
    setOpenPopup(true);
  };

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") {
          return items;
        } else {
          return items.filter((x) =>
            x.firstName.toLowerCase().includes(target.value)
          );
        }
      },
    });
  };
  return (
    <>
      <PageHeader
        title="Employee"
        subTitle="Form Design With Validation"
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper elevation={0} className={classes.pageContent}>
        <Toolbar>
          <Control.Input
            className={classes.searchInput}
            label="Search Employee"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Control.Button
            text="Add new"
            varient="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {employees.length > 0 ? (
              recordsAfterPaging().map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.gender}</TableCell>
                  <TableCell
                    onClick={() => {
                      openInPopup(employee);
                    }}
                  >
                    {employee.firstName} {employee.lastName}
                  </TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.mail}</TableCell>
                  <TableCell>{employee.birthday}</TableCell>
                  <TableCell>{employee.blood}</TableCell>
                  <TableCell>
                    {employee.streetAddress} {employee.streetAddress2}
                    <br />
                    {employee.city} {employee.state}
                    <br />
                    {employee.country} {employee.zipcode}
                  </TableCell>
                  <TableCell>
                    {employee.firstNamex} {employee.lastNamex}
                    <br />
                    {employee.relationx}
                    <br />
                    {employee.phonex}
                    <br />
                    {employee.streetAddressx} {employee.streetAddress2x} <br />
                    {employee.cityx} {employee.statex}
                    <br />
                    {employee.countryx} {employee.zipcodex}
                  </TableCell>
                  <TableCell onClick={() => handleDelete(employee.id)}>
                    <Control.ActionButton>
                      <DeleteForeverIcon />
                    </Control.ActionButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} className="text-center">
                  No Employees
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Add Employee"
      >
        {" "}
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}

export default Employees;
