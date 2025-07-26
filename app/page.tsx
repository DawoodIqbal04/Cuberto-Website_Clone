import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBar from "./components/VideoBar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoBar />
      <About />
    </main>
  );
}
