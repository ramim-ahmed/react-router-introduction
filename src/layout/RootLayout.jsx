import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  const isAdmin = false;
  return (
    <div>
      {!isAdmin && (
        <nav>
          <ul className=" space-x-5">
            <Link to="/">home</Link>
            <Link to="/shop">shop</Link>
            <Link to="/contact">contact</Link>
            <Link to="/admin">Dashboard</Link>
          </ul>
        </nav>
      )}
      <Outlet />
    </div>
  );
}
