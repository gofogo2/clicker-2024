"use client";
import { NotesState } from "@/atom";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

export default function Page() {
  const [notes, setNotes] = useRecoilState(NotesState);
  const supabase = createClient();

  useEffect(() => {
    // const userListener = supabase
    //   .channel("public:notes")
    //   .on(
    //     "postgres_changes",
    //     { event: "*", schema: "public", table: "notes" },
    //     (payload) => handleAllEventsPayload(payload)
    //   )
    //   .subscribe((error) => {
    //     if (error) console.error("Subscription error:", error);
    //     else console.log("Successfully subscribed to changes");
    //   });
    // const getData = async () => {
    //   const { data } = await supabase.from("notes").select();
    //   setNotes(data);
    // };
    // getData();
    // return () => {
    //   userListener.unsubscribe();
    // };
  }, []);
  // function handleAllEventsPayload(payload: any): void {
  //   console.log(payload);
  //   // INSERT 이벤트 처리
  //   if (payload.eventType === "INSERT") {
  //     setNotes((currentNotes) => {
  //       const isExisting = currentNotes?.some(
  //         (note) => note.id === payload.new.id
  //       );
  //       if (!isExisting && currentNotes != null) {
  //         return [...currentNotes, payload.new];
  //       }
  //       return currentNotes;
  //     });
  //   }
  //   // UPDATE 이벤트 처리
  //   else if (payload.eventType === "UPDATE") {
  //     console.log("UPDATE");
  //   }
  //   // DELETE 이벤트 처리
  //   else if (payload.eventType === "DELETE") {
  //     console.log("DELETE");
  //   }
  // }

  // return <pre>{JSON.stringify(notes, null, 2)}</pre>;
  return (
    <div className="flex items-center justify-center h-screen p-5 m-0 bg-white">
       <div className="flex flex-col items-center justify-around w-screen h-screen p-0 m-0">
        <div>
          <div
            style={{ fontFamily: "SamsungSharpSans-bold" }}
            className="text-4xl"
          >
            Clickers
          </div>
        </div>
        <div className="grid w-full gap-5">
          <Link
            href="/enterance"
            className="flex items-center  pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Entrance
          </Link>
          <Link
            href="/exit"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Exit
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Dashboard
          </Link>
          <Link
            href="/admin"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

function handleAllEventsPayload(payload: any): void {
  console.log(payload);
}
