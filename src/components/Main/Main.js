import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Edit from "../edit/Edit";
import Delete from "../delete/Delete";
import { AllUserDetails } from "../../functions/User";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(Username,email, address,  carbs, protein) {
//   return {Username,email, address, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    marginTop: 10,
    marginLeft: 100,
    minWidth: 700,
    maxWidth: 1300,
    marginBottom: 30,
  },
});

export default function Info() {
  const classes = useStyles();

  const [dlts, setDlts] = useState([]);

  const handleSubmit = async () => {
    let result;
    // setButtonstate(true)
    // const data = {
    //   email,
    //   password,
    // };
    try {
      result = await AllUserDetails();
      setDlts(result);
      //localStorage.setItem("AUTH", true);
      //localStorage.setItem("User_details", JSON.stringify(result));
      console.log(result);
      // window.location.reload();
      // window.location.href = "/details";
    } catch (err) {
      console.log(err);
      // setButtonstate(false)
      // setSnack(true)
      // setSuccerr("error")
      // setDescri("Error !");
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Sl NO</StyledTableCell>

            <StyledTableCell align="center">USERNAME</StyledTableCell>
            <StyledTableCell align="center">EMAIL</StyledTableCell>
            <StyledTableCell align="center">ADDRESS</StyledTableCell>
            <StyledTableCell align="center">EDIT</StyledTableCell>
            <StyledTableCell align="center">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dlts.map((row, n) => (
            <StyledTableRow key={row.name}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="center">{n + 1}</StyledTableCell>

              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">
                <Edit
                  color="secondary"
                  href="/edit"
                  name={row.name}
                  email={row.email}
                  address={row.address}
                  id={row._id}
                ></Edit>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Delete
                  color="primary"
                  href="/delete"
                  name={row.name}
                  id={row._id}
                ></Delete>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
