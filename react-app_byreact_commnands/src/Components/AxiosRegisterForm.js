
import axios from "axios";
import { useFormik } from "formik"
import { Link } from "react-router-dom";


export default function AxiosRegisterFormComponent(){
    const formik = useFormik({
        initialValues : {
            userId : 0,
            userName : "",
            password : "",
            age : 0,
            mobileNo :"",
            subscribed : false

        },
        onSubmit : values =>{
            // alert(JSON.stringify(values));
            // axios.post("http://localhost:8081/user",{data:values},)
            // .then(resp=> {console.log(resp.data)})
            // .catch(err=> {console.err(err)})
            axios({
                method : "POST",
                url:"http://localhost:8081/user",
                data: values,

            }).then(resp=> console.log(resp.data))
            .catch(err=> console.err(err))
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dd>User Id</dd>
                    <dt><input type="number" value={formik.values.userId} onChange={formik.handleChange} name="userId" /></dt>
                    <dd>User Name</dd>
                    <dt><input type="text" value={formik.values.userName} onChange={formik.handleChange} name="userName" /></dt>
                    <dd>Password</dd>
                    <dt><input type="text" value={formik.values.password} onChange={formik.handleChange} name="password" /></dt>
                    <dd>Age</dd>
                    <dt><input type="number" value={formik.values.age} onChange={formik.handleChange} name="age" /></dt>
                    <dd>Mobile Number</dd>
                    <dt><input type="text" value={formik.values.mobileNo} onChange={formik.handleChange} name="mobileNo" /></dt>
                    <dd>Subscribed</dd>
                    <dt className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.subscribed} onChange={formik.handleChange} name="subscribed" /></dt>
                </dl>
                <button type="submit" className="btn btn-primary">Register</button>
                
            </form>
        </div>
    )
}