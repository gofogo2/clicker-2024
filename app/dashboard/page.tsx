"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdminVisitor from "../components/AdminVisitor";
import Visitor from "../components/Visitor";
import CountChart from "../components/CountChart";
import CountTable from "../components/CountTable";
export default async function DashboardPage() {
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
      <Grid container spacing={3} sx={{ paddingBottom: 5 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
              color: "black",
            }}
          >
            <Typography
              style={{ fontFamily: "SamsungSharpSans-bold" }}
              sx={{ fontSize: "25px", fontWeight: "800", paddingTop: "50px" }}
            >
              Clickers Dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Visitor count={10} name="Total Visitors" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AdminVisitor count={10} name="Today Visitors" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: 5,
            }}
          >
            <CountChart items={[]} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 220,
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: 5,
            }}
          >
            <CountTable items={[]} Paper={Paper} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
