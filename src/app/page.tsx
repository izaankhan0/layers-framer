import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";

export default function Home() {
    return <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
    </div>;
}
