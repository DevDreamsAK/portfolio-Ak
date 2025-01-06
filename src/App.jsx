
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-gradient-radial from-[#ffffff33] via-[#00091d] to-[#000000] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Profile />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
