import { Link } from "react-router-dom";

function Header() {
  const buttonStyle =
    "px-3 py-1 mx-3  bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out";
  return (
    <header className="flex justify-between items-center mb-20">
      <h1 className="flex justify-center items-center h-10 w-10 rounded-full bg-slate-500 text-slate-100 font-bold">
        SE
      </h1>
      <nav className="flex gap-5">
        <Link className={buttonStyle} to="/">
          Home
        </Link>
        <Link className={buttonStyle} to="/marsphotos">
          Mars
        </Link>
      </nav>
    </header>
  );
}

export default Header;
