import React, { useState } from 'react';
import MenuList from './components/MenuList';
import ItemList from './components/ItemList';

function App() {
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  return (
    <div>
      <h1>Menu Application</h1>
      <MenuList onSelectMenu={setSelectedMenuId} />
      {selectedMenuId && <ItemList menuId={selectedMenuId} />}
    </div>
  );
}

export default App;
