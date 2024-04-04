"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CurrentVisitor from "../components/CurrentVisitor";
export default async function ExitPage() {
  const Add = (count: any) => {};
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 80,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
              color: "black",
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "SamsungSharpSans-bold",
                fontSize: "25px",
                fontWeight: "800",
                paddingTop: "50px",
              }}
            >
              Exit Clickers
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {/* <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 50,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
            }}
          ></Paper> */}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 250,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CurrentVisitor count={10} name="Current Visitors" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 160,
              boxShadow: "none",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f1f1f1",
              marginTop: "30px",
            }}
          >
            {/* <CountButton Add={Add} count={+10} /> */}

            {/* <CountButton Add={Add} count={+5} /> */}
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 160,
              boxShadow: "none",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f1f1f1",
              marginTop: "20px",
            }}
          >
            {/* <CountButton Add={Add} count={-10} /> */}
            <div
              className="mt-2 flex items-center justify-center  w-[47%]   h-36 text-white rounded-xl bg-[#3E91FF] active:bg-black"
              onClick={() => Add(-1)}
            >
              <div className="p-0 mt-2 text-7xl ">-1</div>
            </div>
            <div
              className="mt-2 flex items-center justify-center  w-[47%]   h-36 text-white rounded-xl bg-[#3E91FF] active:bg-black"
              onClick={() => Add(-10)}
            >
              <div className="p-0 mt-2 text-7xl ">-10</div>
            </div>
            {/* <CountButton Add={Add} count={-5} /> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
