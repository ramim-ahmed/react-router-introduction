import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const { title, category, image, description, price } = useLoaderData();
  return (
    <div>
      <div>
        <img className=" w-40" src={image} alt="" />
      </div>
      <div className="mt-3">
        <p>{category}</p>
      </div>
      <div className="space-y-3 mt-3">
        <h1 className="text-xl font-medium">{title}</h1>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
