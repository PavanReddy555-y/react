import { Link, Outlet } from "react-router-dom";


export default function BankHomeComponent() {
    return (
        <div >
            <h1>Bank Home </h1>
            <span><Link to="/personal" >Personal</Link></span>
            <span>|</span>
            <span><Link to="/nri" >NRI</Link></span>
            <hr />
            <Outlet />
        </div>
    )
}