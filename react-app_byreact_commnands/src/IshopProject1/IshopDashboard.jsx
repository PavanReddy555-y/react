import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function IshopDashBoardComponetn() {

    let navigate = useNavigate();

    const [cookie, setCookie, removeCookie] = useCookies();

    const [userName, setUserName] = useState("");

    const [categories, setCategories] = useState([]);

    function LoadCCategories() {
        axios.get("http://localhost:8081/categories")
            .then(resp => {
                //console.log(resp.data);
                setCategories(resp.data);
            }).catch(err => {
                console.error(err);
            }).finally(() => {
                // console.log(categories);
            })

    }

    useEffect(() => {
        if (cookie["userName"] === undefined) {
            navigate("/login")
        } else {
            setUserName(cookie["userName"]);
            LoadCCategories();
        }
    }, [])

    function HandleSignOut() {
        removeCookie("userName");
        navigate("/login")
    }
    return (
        <div>
            <h1>Dashboard Page Welcome {userName}</h1> - <button className="btn btn-danger" onClick={HandleSignOut} >Sign out</button>
            <div>
                <h3>Category List</h3>
                <ol>
                    {
                        categories.map(item =>
                            <li key={item.category}>
                                <Link to={"/products/" + item.category}>{item.category.toUpperCase()}</Link>
                            </li>
                        )
                    }
                </ol>

            </div>
        </div>
    )
}