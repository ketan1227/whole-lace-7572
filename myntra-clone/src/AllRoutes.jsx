import { Route,Routes } from "react-router-dom";
import Tshirt from "./Pages/Tshirt";
import Home from "./Component/Home/Home";
import Product from "./Pages/SingleProductPage";
import Address from "./Pages/Address";
import PaymentPage from "./Pages/Payment";
import Cart from "./Pages/Cart";

function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Tshirt />}></Route>
    <Route path="/tshirt/:productid" element={<Product />} />
    
<Route path="/cart" element={<Cart />} />
<Route path="/address" element={<Address />} />
<Route path="/payment" element={<PaymentPage />} />
    </Routes>
    </>
}

export default AllRoutes