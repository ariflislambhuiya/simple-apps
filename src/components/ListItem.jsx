/* eslint-disable react/prop-types */
const ListItem = ({
  id,
  productName,
  price,
  stock,
  quantity,
  total,
  increment,
  decrement,
}) => (
  <tr>
    <th>{productName}</th>
    <th>{price}</th>
    <th>{stock}</th>
    <th>{quantity}</th>
    <th>{total}</th>
    <th>
      <button disabled={quantity === 0} onClick={() => decrement(id)}>
        -
      </button>
      <button disabled={quantity === stock} onClick={() => increment(id)}>
        +
      </button>
    </th>
  </tr>
);

export default ListItem;
