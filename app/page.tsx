import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/about" }]} />
        <Hero />
      </div>
    </main>
  );
}
