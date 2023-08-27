import Banner from "@/components/Banner";
import Products from "@/components/Products";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return productData;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="max-w-screen-2xl mx-auto bg-gray-300">
      <Banner />
      <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products products={products} />
      </div>
    </main>
  );
}
