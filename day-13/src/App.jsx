import { useState, useMemo } from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" },
    { id: 5, name: "Monitor" },
    { id: 6, name: "Headphones" }
  ];

  const [search, setSearch] = useState("");

  // useMemo optimization
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter(product =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Search App</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      {filteredProducts.map(product => (
        <h3 key={product.id}>
          {product.name}
        </h3>
      ))}
    </div>
  );
}

export default App;