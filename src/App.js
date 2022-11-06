import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {Books} from "./components/Books/Books";
import {Courses} from "./components/Courses/Courses";
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route exact path="/books" element={<Books/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/cart" element={<CartContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
