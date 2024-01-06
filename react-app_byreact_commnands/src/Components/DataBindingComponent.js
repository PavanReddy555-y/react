export function DataBindingComponent(){
    var categories  = ["All", "Fashion","Electromnics","Footweaar","Cloaths"]
    var menu = [
        {Category:'Electronics', Product:["Samsung Tv","Mobile"]},
        {Category:"Footwear", Product:["Nike Casuals","Bata Shoe"]}
    ]
    return(
         <div className="container">
            <h2>Categories List </h2>
            <ol>
                {
                    categories.map(category=>
                        <li key={category}>{category}</li>
                        )
                }
            </ol>

            <h2>Categories Drop Down</h2>
            <select>
                {
                    categories.map( category=>
                        <option key={category} value={category} >{category}</option>
                    )
                }
            </select>

            <h2>Nested List</h2>
            <ol>
                {
                    menu.map(item=>
                        <li key={item.Category}>{item.Category}
                            <ul>
                            {item.Product.map(product=>
                               <li key={product}>{product}</li> 
                                )}
                            </ul>

                        </li>
                        )
                }
            </ol>


            <h2> Nested Array in OptGroup</h2>
            <select>
                {
                    menu.map( item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Product.map(product=>
                                    <option key={product}>{product}</option>
                                    )
                            }
                        </optgroup>
                    )
                }
            </select>


    
         </div>


    )
}