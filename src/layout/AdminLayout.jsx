import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex w-full">
      <nav className="w-1/3 flex flex-col">
        <Link to="/admin/products">
          <p className="border-b inline-block">products</p>
        </Link>
        <Link to="/admin/cart">
          <p className="border-b inline-block">cart</p>
        </Link>
        <Link to="/admin/orders">
          <p className="border-b inline-block">orders</p>
        </Link>
        <Link to="/admin/settings">
          <p className="border-b inline-block">settings</p>
        </Link>
      </nav>
      <div className="w-2/3">
        <Outlet />
      </div>
    </div>
  );
}
