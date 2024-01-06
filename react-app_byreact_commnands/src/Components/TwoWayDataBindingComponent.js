import { useEffect, useState } from "react"

export function TwoWayDatabindingComponent(){
    
    const [categories,setCategories] = useState([]);
    const [Products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    

    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(resp => resp.json())
        .then(data =>
            {
            data.unshift("all");
            setCategories(data)
            }
            )
    }
    function handleCategory(e){
        alert(e.target.value);
        if(e.target.value === "all"){
            LoadProducts("https://fakestoreapi.com/products");
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function LoadProducts(url){
        fetch(url)
        .then(resp => resp.json())
        .then(data =>
            setProducts(data)
        )
    }

    function AddtoCart(e){
        alert(e.target.id)
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(resp => resp.json())
        .then(data =>{
            cart.push(data);
            GetCartCount();
        })
        
    }

    function GetCartCount(){
        setCartCount(cart.length)
    }
    function RemoveItemFromCart(e){
        
        GetCartCount();
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    },[cart.length])
    
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h2><span className="bi bi-cart3 me-2"></span>Shopping Online</h2>
            </header>
            
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label className="fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategory} className="form-select mt-2">
                            {
                                categories.map(category=>
                                    <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                            }
                        </select>
                        </div>
                    </div>
                    
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto p-2 m-2" style={{height:"510px" , width:"600px"}}>
                    {
                        Products.map(product=>
                            <div key={product.id} className="card m-2 p-2 w-25" style={{width:"200px"}}>
                                <img alt="Not Found" src={product.image} className="card-img-top" height="150" />
                                <div className="card-header">
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate}[{product.rating.count}]
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={AddtoCart} id={product.id} className="btn btn-danger">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>    
                        )
                    }

                </main>
                <aside className="col-4">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart4"></span>[{cartCount}] Your Cart
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img alt="not found" src={item.image} width="50" height="50"  />
                                        </td>
                                        <td>
                                            <button key={item.id} id={item.id} onClick={RemoveItemFromCart} className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>

                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    )
}