export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white fixed w-full z-6">
      <h1 className="text-2xl font-bold text-indigo-200">MyPortfolio</h1>
      <div className="flex gap-6 text-lg">
        <a href="#home" className="flex items-center gap-2 hover:text-indigo-400">
          <i className="bx bx-home"></i> Home
        </a>
        <a href="#about" className="flex items-center gap-2 hover:text-indigo-400">
          <i className="bx bx-user"></i> About
        </a>
        <a href="#projects" className="flex items-center gap-2 hover:text-indigo-400">
          <i className="bx bx-code-alt"></i> Projects
        </a>
        <a href="#contact" className="flex items-center gap-2 hover:text-indigo-400">
          <i className="bx bx-envelope"></i> Contact
        </a>
      </div>
    </nav>
  );
}
