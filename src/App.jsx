import shortid from "shortid";

import { useState } from "react";
import ListItem from "./components/ListItem";

const productList = [
  {
    id: shortid.generate(),
    productName: "Laptop",
    price: 10000,
    stock: 10,
  },
  {
    id: shortid.generate(),
    productName: "Computer",
    price: 11000,
    stock: 12,
  },
  {
    id: shortid.generate(),
    productName: "Mouse",
    price: 3000,
    stock: 4,
  },
  {
    id: shortid.generate(),
    productName: "Keyboard",
    price: 5000,
    stock: 6,
  },
];

function App() {
  const [products, setProducts] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const incrementQuantity = (id) => {
    const newProduct = products.map((product) => {
      if (id === product.id && product.stock > product.quantity) {
        product.quantity++, (product.total = product.quantity * product.price);
      }
      return product;
    });
    setProducts(newProduct);
  };

  const decrementQuantity = (id) => {
    const newProduct = products.map((product) => {
      if (id === product.id && product.stock > 0) {
        product.quantity--, (product.total = product.quantity * product.price);
      }
      return product;
    });
    setProducts(newProduct);
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ListItem
              key={product.id}
              {...product}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && <p>Total:{total}</p>}
    </div>
  );
}

export default App;
