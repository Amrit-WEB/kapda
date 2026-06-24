import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <nav className="flex justify-between items-center py-2 px-6 bg-orange-100">
        <div className="flex flex-col items-center">
          <img className="h-15" src="/logo.png" alt="Kapda logo" />
          <p className="text-pink-600 font-semibold tracking-wider">KAPDA</p>
        </div>
        <div className="flex text-pink-600 gap-4 text-xl">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="font-semibold text-xl flex items-center gap-2 text-pink-600">
          <FaShoppingCart /> Cart 0
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
