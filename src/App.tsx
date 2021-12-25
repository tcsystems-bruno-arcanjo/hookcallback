import React from "react";
import Item from "./components/Item";

function App() {
  const [items, setItems] = React.useState<string[]>([]);
  const [wishList, setWishList] = React.useState<string[]>([]);
  const [newItem, setNewItem]  = React.useState('');

  function addItemToList() {
    setItems([ ...items, `Item ${items.length}`]);
  }

  const addToWishList = React.useCallback((item: string) => {
    setWishList(state => [...state, item]);
  }, []);

  const countItemsWithOne = React.useMemo(() => {
    console.log('countItemsWithOne');

    return items.filter((item) => item.includes('1')).length;
  }, [items]);
  
  return (
    <div>
      <input onChange={(event) => setNewItem(event.target.value)} type="text" value={newItem} />
      <button onClick={addItemToList} type="button">Adicionar item</button>
      <ul>
        { items.map((item) => <Item key={item} addToWishList={addToWishList} title={item} />) }
      </ul>
      {countItemsWithOne}
    </div>
  );
}

export default App;
