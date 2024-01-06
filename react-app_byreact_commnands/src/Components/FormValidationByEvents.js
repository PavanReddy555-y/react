import { useState } from "react"


export default function FormValidationbyEventsComponent(){

    const [users] = useState([
        {userId:"Pavan"},
        {userId:"Pavan1"},
        {userId:"Pavan2"},
    ])

    const [UserDetails, setUserDetails] = useState({UserId :"",Password:""})

    const [userNameMsg,setUserNameMsg] = useState("");
    const [isUserIdValid, setUserIdValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState("");
    const [isPwdValid, setPwdValid] = useState(false);


    function userIdHandle(e){
        setUserDetails({
            UserId  : e.target.value,
            Password : UserDetails.Password
        })
    }
    function pwdHandle(e){
        setUserDetails({
            UserId  : UserDetails.UserId,
            Password : e.target.value
        })
    }

    function userNameValidate(e){
        //console.log(e.target.value);
        for(var user of users){
            if(e.target.value == user.userId){
                setUserNameMsg("User Id taken -Try Another ")
                setUserIdValid(false);
                break;
            }else{
                setUserNameMsg("User id Avilable")
                setUserIdValid(true);
            }
        }
    }
    function verifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPwdMsg("Strong Password");
            setPwdValid(true);
        }else{
            if(e.target.value.length<4){
                setPwdMsg("Poor Password")
                setPwdValid(false);
            }else{
                setPwdMsg("Weak Password")
                setPwdValid(false);
            }
        }
    }
    function hideUseIdMsg(e){
        if(e.target.value == ""){
            setUserNameMsg("User Id required ");
        }else{
            setUserNameMsg("")
        }
    }
    function SubmittedData(){
        console.log(this.UserDetails)

    }
     function OnRegisterClick(){
        alert(JSON.stringify(UserDetails))
     }
    return(
        <div className="container-fluid">
            <form onSubmit={SubmittedData}>
                <h1>Register User</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={userIdHandle} onBlur={hideUseIdMsg} onKeyUp={userNameValidate} name="UserName" /></dd>
                    <dd className={(isUserIdValid)?'text-success':'text-danger'}>{userNameMsg}</dd>
                    <dt>Password</dt>
                    <dd><input onChange={pwdHandle} onKeyUp={verifyPassword} type="text" name="Password" /></dd>
                    <dd className={(isPwdValid)?"text-success":"text-danger"}>
                        {pwdMsg}
                        </dd>
                </dl>
                <button onClick={OnRegisterClick} >Register</button>
            </form>
        </div>
    )
}