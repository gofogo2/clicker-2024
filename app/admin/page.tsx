"use client";
import React from 'react'
import { Container, Grid, Paper, Typography } from "@mui/material";
import AdminVisitor from '../components/AdminVisitor';
import AdminButton from '../components/AdminButton';
import Visitor from '../components/Visitor';
export default async function AdminPage() {
  return (
    <Container
    maxWidth="lg"
    sx={{ height: "100vh",   paddingLeft: 5,
    paddingRight: 5, backgroundColor: "#f1f1f1" }}
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
          <Typography style={{ fontFamily: "SamsungSharpSans-bold" }}  sx={{  fontSize: "25px",fontWeight:'800', paddingTop: "50px" }}>
          Clickers Admin Page
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 120,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
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
            height: 120,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
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
            mt:5,
            height: 250,
            alignItems: "center",
            justifyContent: "center",
            boxShadow:'none',
            backgroundColor: "#f1f1f1"
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full" >
            <div className="text-xl" >Add Today's Visitor</div>
            <div className="mt-10" ></div>
          <AdminButton Add={10} count={100}  />
          <div className="mt-6" ></div>
          <AdminButton Add={10} count={1000} />
          </div>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  )
}
