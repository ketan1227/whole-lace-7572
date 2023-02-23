import { Route,Routes } from "react-router-dom";
import Tshirt from "./Pages/Tshirt";
import Home from "./Component/Home/Home";
import Product from "./Pages/SingleProductPage";
function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Tshirt />}></Route>
    <Route path="/tshirt/:productid" element={<Product />} />



    </Routes>
    </>
}

export default AllRoutes