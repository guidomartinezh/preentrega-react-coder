import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos" />} />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Productos" />}
        />
        <Route path="/items/:id" element={<div>Detalle</div>} />
        <Route path="*" element={Error404} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
