import { Route,Routes } from "react-router-dom";
import Tshirt from "./Pages/Tshirt";
import Home from "./Component/Home/Home";
function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Tshirt />}></Route>




    </Routes>
    </>
}

export default AllRoutes