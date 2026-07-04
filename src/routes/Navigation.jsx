import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <nav className="flex justify-between items-center py-2 px-6 bg-linear-to-r from-orange-100 via-pink-200 to-orange-100">
        <div className="flex flex-col items-center">
          <img className="h-15" src="/logo.png" alt="Kapda logo" />
          <p className="text-pink-600 font-semibold tracking-wider">KAPDA</p>
        </div>
        <div className="flex text-pink-600 gap-4 text-xl items-center ">
          <Link
            to="/"
            className="hover:underline hover:text-pink-700 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:underline hover:text-pink-700 cursor-pointer"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-pink-700 cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="/auth"
            className="hover:underline hover:text-pink-700 cursor-pointer"
          >
            Account
          </Link>
        </div>
        <div className="font-semibold flex items-center gap-2 bg-pink-500 rounded text-white px-3 py-1 hover:bg-pink-600">
          <FaShoppingCart /> Cart 0
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
