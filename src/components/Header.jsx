import { Link } from 'react-scroll';
import { useState } from 'react';
import { X, Menu, Sun, Moon, } from 'lucide-react';


const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
  
const Header = ({ isDark, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    const menuItems = [
      { to: "home", label: "Home" },
      { to: "about-us", label: "About Us" },
      { to: "services", label: "Services" },
      { to: "clients", label: "Experiences" },
      { to: "contact", label: "Contact" },
    ];
  
    return (
      <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lg2.png" alt="Forest Consulting Group Logo" className="h-16 w-auto mr-2" />
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-500">Forest Consulting Group</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="hover:text-green-500 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2 hover:text-green-500 cursor-pointer"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-2">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </nav>
        )}
      </header>
    );
  };

  export default Header;