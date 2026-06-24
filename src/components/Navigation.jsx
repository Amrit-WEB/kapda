import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
