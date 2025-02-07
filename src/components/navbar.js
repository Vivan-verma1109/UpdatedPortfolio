export default function Navbar() {
    return (
      <nav className="fixed top-0 right-0 flex items-center space-x-8 bg-gray-800 text-white py-4 px-8 shadow-md z-10">
        <a href="#home" className="hover:text-blue-400 text-lg">Home</a>
        <a href="#about" className="hover:text-red-400 text-lg">About</a>
        <a href="#projects" className="hover:text-blue-400 text-lg">Projects</a>
        <a href="#contact" className="hover:text-blue-400 text-lg">Contact</a>
      </nav>
    );
  }