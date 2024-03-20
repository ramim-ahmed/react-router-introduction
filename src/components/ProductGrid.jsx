import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductGrid({ item }) {
  const { image, title, price, id } = item || {};
  return (
    <div className="border p-2">
      <div>
        <img className=" w-32 h-32" src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>${price}</p>
      </div>
      <div className="flex justify-between items-center">
        <button className="border px-2 mt-2">Buy Now</button>
        <Link to={`/admin/products/${id}`}>
          <p className="border px-2 mt-2">Details</p>
        </Link>
      </div>
    </div>
  );
}
