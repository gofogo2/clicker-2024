import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

  import React from "react";
  
  const CountTable = (props:any) => {
    return (
      <TableContainer
        sx={{ marginLeft: 3, marginRight: 3, height: 220, boxShadow: "none" }}
        component={props.Paper}
      >
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead sx={{margin:0,padding:0}} >
            <TableRow sx={{margin:0,padding:0, "&:last-child td, &:last-child th": { border: 0,borderBottom:0.1,paddingBottom:'3px' },}} >
              <TableCell
                sx={{
                  margin: 0,
                  paddingLeft: 0,
                  fontFamily: "SamsungSharpSans-Medium",
                }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  margin: 0,
                  paddingRight: 0,
                  fontFamily: "SamsungSharpSans-Medium",
                }}
                align="right"
              >
                Visitors
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: 0, margin: 0 }}>
            {props.items.length !== 0 &&
              props.items.map((item:any) => (
                <TableRow
                  key={item.name}
                  sx={{ margin: 0, padding: 0, border: 0 }}
                >
                  <TableCell
                    style={{ fontFamily: "SamsungSharpSans-bold" }}
                    sx={{ border: 0, margin: 0, padding: 0, paddingTop: 1 }}
                    component="th"
                    scope="row"
                  >
                    {new Intl.DateTimeFormat("en-US").format(new Date(item.date))}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "SamsungSharpSans-bold" }}
                    sx={{ border: 0, margin: 0, padding: 0, paddingTop: 1, }}
                    align="right"
                  >
                    {item.sum.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default CountTable;
  