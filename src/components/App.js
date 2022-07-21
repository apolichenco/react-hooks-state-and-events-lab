import React , { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isLight, setIsLight] = useState()

  function handleClick() {
    setIsLight(!isLight);
  }

  const appClass = isLight ? "App dark" : "App light"
  const buttonText = isLight ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
