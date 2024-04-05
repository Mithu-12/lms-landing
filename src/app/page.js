"use client"
import Image from "next/image";
import Navbar from "./component/Navbar";
import { Banner } from "./component/Banner";
import Cariculam from "./component/Cariculam";
import Technology from "./component/Technology";
import { data } from "@/lib/data";
import KidEducation from "./component/KidEducation";
import Footer from "./component/Footer";
import Offer from "./component/Offer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cariculam/>
      <Technology data={data}/>
      {/* <KidEducation/> */}
      <Offer/>
      <Footer/>
    </div>
  );
}
