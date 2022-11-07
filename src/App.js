import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Books } from "./components/Books/Books";
import { Courses } from "./components/Courses/Courses";
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/courses" element={<Courses/>} />
          <Route path="/cart" element={<CartContainer/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
