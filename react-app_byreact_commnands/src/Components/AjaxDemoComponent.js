import axios from "axios";
import $ from "jquery"
import { useEffect, useState } from "react"


export function AjaxDemoComponent(){
    const [users, setUsers] = useState([]);
    const [headding, setHedding] = useState("");
    useEffect(()=>{
        /*
        $.ajax({
            method: "GET",
            url: "http://localhost:8081/users",
            success: function(response){
                setHedding("JQuery Ajax Calling")
                console.log(response);
                setUsers(response);
            }
        })
        */
       axios.get("http://localhost:8081/users").then(resp=>{
        setHedding("Axios Calling")
        setUsers(resp.data);
       }).catch(er=>{
        console.error(er)
       })
    },[])
    return(
        <div className="contianer-fluid">
            <h2>{headding}</h2>
            <ol>
                {
                    users.map(user=>
                        <li key={user.userId}>{user.userName}</li>
                    )
                }
            </ol>
        </div>
    )
}