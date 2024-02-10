import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./component/Home"
import Signin from "./component/Signin"
import Navbar from './component/Navbar'
import Product from './component/Product'
import Productdetails from './component/Productdetails'
import Cart from './component/Cart'   
import Bill from './component/Bill'
function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" Component={Home}></Route>
                    <Route path="/Signin" Component={Signin}></Route>
                    <Route path="/Navbar" Component={Navbar}></Route>
                    <Route path="/Product" Component={Product}></Route>
                    <Route path="/Productdetails" Component={Productdetails}></Route>
                    <Route path="/Cart" Component={Cart}></Route>
                    <Route path="/Bill" Component={Bill}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;