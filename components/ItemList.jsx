import React, { useEffect, useState } from 'react';
import { getItemsByMenu } from '../services/api';

const ItemList = ({ menuId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (menuId) {
      getItemsByMenu(menuId).then((res) => setItems(res.data));
    }
  }, [menuId]);

  return (
    <div>
      <h2>Menu Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
