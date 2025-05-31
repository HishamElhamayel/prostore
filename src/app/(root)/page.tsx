import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <h1>Hello World</h1>
      <ProductList data={latestProducts} title="Featured Products" limit={4} />
    </div>
  );
};

export default Homepage;
