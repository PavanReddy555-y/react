import { Route, Outlet, Link } from "react-router-dom";

export default function PersonalHome() {
    return (
        <div>
            <h1>Personal Home</h1>
            <dl>
                <li><Link to="plogin">Login</Link></li>
                <li><Link to="pregister">Register</Link></li>
            </dl>
            <hr />
            <Outlet />
        </div>
    )
}