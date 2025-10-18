import { FiBox, FiTag } from "react-icons/fi";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  // Grouper les produits par catégorie
  const groupedProducts = products.reduce<Record<string, Product[]>>((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-6 p-4 bg-gray-900 rounded-2xl text-white shadow-lg">
      {Object.entries(groupedProducts).map(([category, productsInCategory]) => (
        <div key={category}>
          <h2 className="text-lg font-semibold text-purple-400 mb-2">{category}</h2>
          <div className="flex flex-col gap-4">
            {productsInCategory.map((p) => (
              <div
                key={p.id}
                className="relative flex items-start gap-4 border-l-2 border-gray-700 pl-4 hover:border-purple-400 transition-colors duration-300"
              >
                <div className="absolute -left-5 top-2 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-md">
                  <FiBox className="text-green-400 w-5 h-5" />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm font-medium flex items-center gap-1">
                    <FiTag className="w-4 h-4 text-purple-400" /> {p.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{p.description}</p>
                  <p className="text-xs text-purple-400 mt-1 font-semibold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;