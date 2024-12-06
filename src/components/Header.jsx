import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [currentPage, setCurrentPage] = useState("home");

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);

    if (location.pathname === "/marsphotos") {
      setCurrentPage("mars");
    }

    if (location.pathname === "/") {
      setCurrentPage("home");
    }
  }, [location]);

  const buttonActiveStyle =
    "px-3 py-1 mx-3  bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out";

  const buttonInactiveStyle =
    "px-3 py-1 mx-3  bg-gradient-to-r from-slate-600 to-slate-500 text-white font-semibold rounded-lg shadow-md hover:from-slate-500 hover:to-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out";

  return (
    <header className="flex justify-between items-center mb-20">
      <h1 className="flex justify-center items-center h-10 w-10 rounded-full bg-slate-500 text-slate-100 font-bold">
        SE
      </h1>
      <nav className="flex gap-5">
        <Link
          className={
            currentPage === "home" ? buttonActiveStyle : buttonInactiveStyle
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            currentPage === "mars" ? buttonActiveStyle : buttonInactiveStyle
          }
          to="/marsphotos"
        >
          Mars
        </Link>
      </nav>
    </header>
  );
}

export default Header;
