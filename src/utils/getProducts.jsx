const getProducts = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    const productData = await response.json();
    return productData;
    
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

export default getProducts;
