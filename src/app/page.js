"use client";
import Hero from "@/components/Hero/page";
import Communities from "@/components/HomeComp/Communities/Communities";
import Request from "@/components/HomeComp/Request";
import Statement from "@/components/HomeComp/Statement/Statement";
import Testimonies from "@/components/HomeComp/Testimonies/Testimonies";
import UpcomingEvent from "@/components/HomeComp/Upcoming/UpcomingEvent";

export default function Home() {
  return (
    <main>
      <Hero />
      <Request />
      <UpcomingEvent />
      <Statement />
      <Communities />
      <Testimonies />
    </main>
  );
}
