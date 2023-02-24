import { Route,Routes } from "react-router-dom";
import Tshirt from "./Pages/Tshirt";
import Home from "./Component/Home/Home";
import Product from "./Pages/SingleProductPage";
import Address from "./Pages/Address";
import PaymentPage from "./Pages/Payment";
import Cart from "./Pages/Cart";
import SignupForm from "./Pages/Signup";
import AddProduct from "./Pages/Backend";

import LoginForm from "./Pages/Login";
function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Tshirt />}></Route>
    <Route path="/tshirt/:productid" element={<Product />} />
    
<Route path="/cart" element={<Cart />} />
<Route path="/address" element={<Address />} />
<Route path="/payment" element={<PaymentPage />} />
<Route path="/login" element={<LoginForm />} />
<Route path="/signup" element={<SignupForm />} />
<Route path="/backend" element={<AddProduct />} />
    </Routes>
    </>
}

export default AllRoutes