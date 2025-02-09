export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 flex items-center space-x-6 bg-gray-800 text-white py-3 px-6 shadow-lg z-50">
      <a href="#home" className="hover:text-red-400 text-lg transition">
        Home
      </a>
      <a href="#about" className="hover:text-red-400 text-lg transition">
        About
      </a>
      <a href="#projects" className="hover:text-red-400 text-lg transition">
        Projects
      </a>
      <a href="#contact" className="hover:text-red-400 text-lg transition">
        Contact
      </a>
    </nav>
  );
}
