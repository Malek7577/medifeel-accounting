import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Lipstick", stock: 100, costPrice: 20, salePrice: 35, currency: "AED" },
  { id: 2, name: "Moisturizer", stock: 50, costPrice: 50, salePrice: 80, currency: "EUR" },
  { id: 3, name: "Perfume", stock: 30, costPrice: 70, salePrice: 120, currency: "GBP" },
];

const currencySymbols = {
  AED: "د.إ",
  EUR: "€",
  GBP: "£"
};

function App() {
  const [products] = useState(productsData);

  const calculateProfit = () => {
    return products.reduce((total, product) => {
      return total + (product.salePrice - product.costPrice) * product.stock;
    }, 0);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Medifeel LLC Fz - Inventory Report</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock} - Cost: {currencySymbols[product.currency]}{product.costPrice} - Price: {currencySymbols[product.currency]}{product.salePrice}
          </li>
        ))}
      </ul>
      <h2>Total Profit: {currencySymbols[products[0].currency]}{calculateProfit().toFixed(2)}</h2>
    </div>
  );
}

export default App;