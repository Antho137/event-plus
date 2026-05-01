import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
  const handleButton = () => {
    alert('You are welcome!');
  };

  return (
    <nav className="bg-blue-100 w-full fixed top-0 z-10 p-4 sm:px-10 lg:px-25">
      <div className="flex flex justify-between items-center">
        <div className="flex flex justify-between items-center gap-0.5">
          <img src="/logo1.jpg" alt="Event logo" />
          <h1 className="text-blue-900 font-medium text-xl md:text-xl">
            Event Plus
          </h1>          
        </div>
        <div className="md:hidden">
          <button className="text-white pt-1" onClick={handleMenu}>
            {!isMenuOpen ? (
              <FaBars className="fas fa-bars text-blue-900 text-xl" />
            ) : (
              <FaTimes className="fas fa-times text-blue-900 text-xl" />
            )}
          </button>
        </div>
        <ul className="hidden text-sm md:flex space-x-1 ml-50">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5 border-b-3 blue-600"
                  : "text-blue-900"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button 
          onClick={handleButton} 
          className='w-28 bg-blue-600 text-white text-sm text-center pt-0.5 pb-1.5 font-normal rounded-xl hover:bg-white hover:text-blue-600 hover:border-1 blue-600 cursor-pointer'>
            Let do it now
        </button>
      </div>
      {isMenuOpen ? (
        <ul className="flex justify-around text-sm md:hidden bg-white mt-3 py-2">
          <li className="py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 px-2 pt-0.5 pb-1.5"
                  : "text-blue-900"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
