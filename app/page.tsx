import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBar from "./components/VideoBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Inspiration from "./components/Inspiration";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoBar />
      <About />
      <Projects />
      <Resources />
      <Inspiration />
    </main>
  );
}
