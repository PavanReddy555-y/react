export function NetflixHeader(){
    return(
        
        <div className="d-flex justify-content-between bg-dark m-3 p-2">
            <div>
                <h2 className="text-danger">NETFLIX</h2>
            </div>
            <div className="input-group w-25">
                <select className="form-select">
                    <option>Language</option>
                    <option>English</option>
                    <option>Telugu</option>
                </select>
                <button className="btn btn-danger ms-1">Signin</button>
            </div>


        </div>
        
    )
}