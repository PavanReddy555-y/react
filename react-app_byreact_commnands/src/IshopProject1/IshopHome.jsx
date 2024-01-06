import { Link } from "react-router-dom"
export default function IshopHomeComponetn() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/register"> New Register</Link>
            <span> | </span>
            <Link to="/login">Existing user ! Login</Link>
        </div>
    )
}