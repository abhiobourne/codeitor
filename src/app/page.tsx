import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Payment from "./components/Payment";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Payment />
    </>
  );
}
