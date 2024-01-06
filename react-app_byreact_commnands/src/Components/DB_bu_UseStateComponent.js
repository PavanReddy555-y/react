import { useEffect, useState } from "react";

export function DataBindingByUseStateComponent(){
    const [mars, setMars] = useState();
    console.log(mars)
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setMars(data);
        })
        },[])
    return(
        <div className="container">
            <h2>Mars Phots</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {
                        // mars.photos.map(data=>
                        //     <tr>
                        //         <td>{data.id}</td>
                        //         <td>{data.camera.full_name}</td>
                        //         <td>{data.rover.name}</td>
                        //         <td>
                        //             <img src={data.img_src} alt="image not loaded"  width="100" height="100" />
                        //         </td>
                        //     </tr>

                        // )
                    }
                    
                </tbody>
            </table>

        </div>
    );
}