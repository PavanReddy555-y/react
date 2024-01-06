import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
export default function IshopProductsComponent() {

    let param = useParams();
    const [category, setCategory] = useState("");

    const [products, SetProducts] = useState([]);

    useEffect(() => {
        setCategory(param.category);
        console.log(category);
        axios.get("http://localhost:8081/products/" + param.category)
            .then(resp => {
                console.log(resp.data);
                SetProducts(resp.data);
            })
    }, [])
    return (
        <div>
            <h2>{category.toUpperCase()}  List</h2>
            <ol>
                {
                    products.map(item =>
                        <li key={item.id}>
                            <img src={item.image} height="50" width="50" alt="not found." />

                            <div>
                                <Link to={"/product/" + item.pid}>{item.title}</Link>
                            </div>
                        </li>

                    )
                }
            </ol>
            <Link to="/dashboard">Back To Categories</Link >
        </div>
    )
}