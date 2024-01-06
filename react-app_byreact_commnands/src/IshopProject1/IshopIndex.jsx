import { BrowserRouter, Route, Link, Routes, useNavigate } from "react-router-dom"
import IshopHomeComponetn from "./IshopHome"
import IshopLoginComponetn from "./IshopLogin"
import IshopRegisterComponetn from "./IshopRegister"
import IshopDashBoardComponetn from "./IshopDashboard"
import IshopProductsComponent from "./IsopProducts"
import IsopPRoductDetailscomponent from "./IsopProductDetails"
// import { useCookies } from "react-cookie"
// import { useEffect, useState } from "react"

export default function IshopIndexComponent() {
    // const [cookie, setCookie, removeCookie] = useCookies();
    // const [btnToggle, setBtntoggle] = useState();

    /*
        useEffect(() => {
            cookie["userName"] !== undefined ? setBtntoggle("Log Out") : setBtntoggle("Log In");
        }, [btnToggle])
    
        function ToggleLoginLogOut() {
            if (btnToggle === "Log In") {
                //navigate("/login")
                setBtntoggle("Log Out");
    
            } else {
                setBtntoggle("Log In");
                removeCookie("userName");
            }
        }*/
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 m-2">
                <div><h1>IShop - Online Store</h1></div>
                {/* <div><button className="btn btn-primary" onClick={ToggleLoginLogOut}>{btnToggle}</button></div> */}
            </header>
            <section className="mt-2 row">
                <BrowserRouter>
                    <nav className="col-3">
                        <div className="mb-2">
                            <Link to="/home" className="btn btn-danger w-100">Home</Link>
                        </div>
                        <div className="mb-2">
                            <Link to="/register" className="btn btn-danger w-100">Register</Link>
                        </div >
                        <div className="mb-2">
                            <Link to="/login" className="btn btn-danger w-100">Login</Link>
                        </div>
                        <div className="mb-2">
                            <Link to="/dashboard" className="btn btn-danger w-100">Dashboard</Link>
                        </div>
                    </nav>
                    <main className="col-9">
                        <Routes>
                            <Route path="/" element={<IshopHomeComponetn />}></Route>
                            <Route path="home" element={<IshopHomeComponetn />}>Home</Route>
                            <Route path="login" element={<IshopLoginComponetn />}>Login</Route>
                            <Route path="register" element={<IshopRegisterComponetn />} >Register</Route>
                            <Route path="dashboard" element={<IshopDashBoardComponetn />} >Dashboard</Route>
                            <Route path="products/:category" element={<IshopProductsComponent />}></Route>
                            <Route path="product/:productId" element={<IsopPRoductDetailscomponent />}></Route>
                            <Route path="errorpage" element={
                                <div>
                                    <h1 className="text-danger">Invalid Credentials</h1>
                                    <br />
                                    <Link to="/login"> Try Again !</Link>
                                </div>
                            }></Route>
                        </Routes>
                    </main>
                </BrowserRouter>

            </section>

        </div>
    )
}