import ThreeBg from "./components/Hero3D";
import About from "./components/About";
import Projects from "./components/Projects";
//import ExploreMe from "./components/Explore";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-black text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/40 backdrop-blur-lg z-20">
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <i className="bx bx-code-alt text-cyan-400 text-3xl"></i>
          MyPortfolio
        </h1>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:text-cyan-400 flex items-center gap-1">
              <i className="bx bx-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 flex items-center gap-1">
              <i className="bx bx-user"></i> About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 flex items-center gap-1">
              <i className="bx bx-folder"></i> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 flex items-center gap-1">
              <i className="bx bx-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-screen h-screen flex items-center justify-center text-center pt-20"
      >
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <ThreeBg />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-cyan-400">Gokula Kumaran</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            <i className="bx bx-joystick text-cyan-400 mr-2"></i>
            Game Developer | Full-Stack Developer | Designer
          </p>
          <a href="#projects">
            <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl shadow-lg hover:bg-cyan-400 transition flex items-center gap-2">
              <i className="bx bx-right-arrow-alt text-xl"></i>
              Explore My Work
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <Contact />
      </section>
    </div>
  );
}
