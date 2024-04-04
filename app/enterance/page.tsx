"use client";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import Visitor from "../components/Visitor";
import CurrentVisitor from "../components/CurrentVisitor";
import CountButton from "../components/CountButton";
import Lottie from "react-lottie";
import { useRecoilState } from "recoil";
import { CountState, SumState, TodayState } from "@/atom";
import { createClient } from "@/utils/supabase/client";
export default async function EnterancePage() {
  const supabase = createClient();
  const [countL, setCountL] = useRecoilState(CountState);
  const [sumL, setSumL] = useRecoilState(SumState);
  const [today, setToDay] = useRecoilState(TodayState);

  const Add = async (cnt: any) => {
    const result = await supabase
      .from("clicker")
      .update({ sum: sumL + cnt, count: countL + cnt })
      .eq("day", today);
    console.log(result);
  };
  const getData = async () => {
    const utcDay = new Date().getUTCDate();
    const {
      data: { sum, count },
      error,
    } = await supabase.from("clicker").select().eq("day", utcDay).single();

    setSumL(sum);
    setCountL(count);
    setToDay(utcDay);
  };
  useEffect(() => {
    console.log("useEffect");
    const userListener = supabase
      .channel("public:default")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "clicker" },
        (payload) => handleAllEventsPayload(payload)
      )
      .subscribe();

    function handleAllEventsPayload(payload: any): void {
      // INSERT 이벤트에 대한 처리
      switch (payload.eventType) {
        case "INSERT":
          break;
        case "UPDATE":
           const data = payload.new;
           console.log(data);
          setCountL(data.count);
          setSumL(data.sum);
        // console.log(count);
        // console.log(sum);
          break;
        case "SELECT":
          break;
        default:
          break;
      }
        // console.log(payload);
    }
    getData().then((a) => console.log(a));
  }, []);
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
            <Visitor count={sumL} name="Today Visitors" />
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
            <CurrentVisitor count={countL} name="Current Visitors" />
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
            <div className="flex flex-col items-center justify-center space-y-2" >
            <div className="flex space-x-2" >
            <CountButton Add={Add} count={1} />
            <CountButton Add={Add} count={5} />
            <CountButton Add={Add} count={10} />
            </div>
            <div className="flex space-x-2" >
            <CountButton Add={Add} count={20} />
            <CountButton Add={Add} count={30} />
            <CountButton Add={Add} count={50} />
            </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
