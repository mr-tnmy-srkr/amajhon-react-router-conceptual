// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { products } = useLoaderData();
  // console.log(products);

// or

  /* const [products,setProducts] = useState([]);
  useEffect(()=>{
fetch(`https://dummyjson.com/products`)
.then(res=>res.json())
.then(data=>setProducts(data.products))
  },[])
console.log(products); */

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 place-items-center p-5">
      {products && products?.map((product) => <ProductsCard key={product.id} product={product}></ProductsCard>)}
    </div>
  );
};

export default Products;
