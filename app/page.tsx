import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBar from "./components/VideoBar";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoBar />
    </main>
  );
}
