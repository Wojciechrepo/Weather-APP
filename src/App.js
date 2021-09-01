import React from "react";
import Search from "./components/SearchBox/Search";
import Item from "./components/ItemBox/Item";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <Item />
    </div>
  );
}

export default App;
