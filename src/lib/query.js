
export async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
}

export async function fetchProductDetailsById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data
}