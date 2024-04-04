"use client";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Visitor from "../components/Visitor";
import CurrentVisitor from "../components/CurrentVisitor";
import CountButton from "../components/CountButton";
import Lottie from "react-lottie";
export default async function EnterancePage() {
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
              height: 150,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
              color: "black",
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
              Entrance Clickers
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 120,
              borderRadius: 5,
            }}
          >
            <Visitor count={10} name="Today Visitors" />
          </Paper>
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
              height: 120,
              boxShadow: "none",
              borderRadius: 5,
              marginTop: 6,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f1f1f1",
            }}
          >
            <CountButton Add={Add} count={10} />

            <div
              className="flex items-center justify-center w-24 h-24 text-white rounded-xl bg-[#3E91FF] active:bg-black"
              //   onClick={() => Add(1)}
            >
              <div className="p-0 mt-2 text-5xl ">+1</div>
            </div>
            <CountButton Add={Add} count={5} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
