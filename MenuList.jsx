import React, { useEffect, useState } from 'react';
import { getMenus } from '../services/api';

const MenuList = ({ onSelectMenu }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((res) => setMenus(res.data));
  }, []);

  return (
    <div>
      <h2>Menus</h2>
      <ul>
        {menus.map((menu) => (
          <li key={menu._id} onClick={() => onSelectMenu(menu._id)}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
