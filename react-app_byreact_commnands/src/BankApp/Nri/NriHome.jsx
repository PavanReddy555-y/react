import { Link, Outlet } from "react-router-dom";

export default function NriHome() {
    return (
        <div>
            <h1>Nri Home</h1>
            <dl>
                <li><Link to="nlogin">Login</Link></li>
                <li><Link to="nregister">register</Link></li>
            </dl>
            <hr />
            <Outlet />
        </div>
    )
}