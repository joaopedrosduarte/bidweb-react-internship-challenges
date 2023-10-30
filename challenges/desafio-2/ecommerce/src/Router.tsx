import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductPage />}/>
        </Routes>
    )
}