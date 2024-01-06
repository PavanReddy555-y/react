import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export default function IsopPRoductDetailscomponent() {

    var param = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8081/product/" + param.productId)
            .then(resp => {

                console.log(resp.data)
                setProduct(resp.data);
                console.log("product33333333333333333333333333" + product)
            })
    }, [])

    return (
        <div className=" text-overflow">
            <h1>Product Details</h1>
            <div className="d-flex">
                <div >
                    <img src={product.image} height="200" width="200" alt="not found." />
                </div>
                <div >
                    <dl className="row ms-5">
                        <dt className="col-4">Title</dt>
                        <dd className="col-8">{product.title}</dd>
                        <dt className="col-4">Price</dt>
                        <dd className="col-8">{product.price}</dd>
                        <dt className="col-4">Rating</dt>
                        <dd className="col-8">{product.rating.rate}</dd>
                    </dl>

                </div>
            </div>
            <Link to={"/products/" + product.category}>Back to Products</Link>
        </div>
    )
}