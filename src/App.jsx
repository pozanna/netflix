import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sections from "./components/Sections";
import sectionsData from "./assets/films.json";
// console.log(sectionsData);

function App() {
  return (
    <div className="container">
      <Header />
      <Sections data={sectionsData} />
    </div>
  );
}

export default App;
