import React, {
  useContext,
  useEffect,
  useState
} from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";

import { MyStore } from "./Context/MyContext";

const App = () => {

  const { isCartOpen } = useContext(MyStore);

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Products
  const getProductsData = async () => {

    try {

      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );

      setProductsData(res.data);

    } catch (err) {

      console.log("API Error:", err);
      setError("Unable to load products. Please try again.");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {isCartOpen ? (

        <CartScreen />

      ) : (

        <main className="max-w-7xl mx-auto px-6 py-10">

          {/* Heading */}
          <div className="mb-10">

            <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Discover your style
            </p>

            <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
              Explore Our Products
            </h1>

            <p className="text-gray-500 mt-3">
              Find the best products at amazing prices.
            </p>

          </div>

          {/* Loading */}
          {loading && (

            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mx-auto"></div>

              <p className="mt-5 text-gray-500 font-semibold">
                Loading Products...
              </p>
            </div>

          )}

          {/* Error */}
          {error && (

            <div className="text-center text-red-500 font-semibold">
              {error}
            </div>

          )}

          {/* Products */}
          {!loading && !error && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

              {productsData.map((product) => (

                <ProductCards
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          )}

        </main>

      )}

    </div>

  );
};

export default App;