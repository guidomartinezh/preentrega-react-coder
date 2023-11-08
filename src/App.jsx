import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a MERCH IT" />
    </>
  );
}

export default App;
