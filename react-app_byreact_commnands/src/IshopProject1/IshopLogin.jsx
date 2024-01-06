import { Button, TextField } from "@mui/material";
import axios from "axios";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
export default function IshopLoginComponetn() {
  let navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();
  const [users, setUSers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/users").then((resp) => {
      //console.log(resp.data);
      setUSers(resp.data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      for (var user of users) {
        if (
          user.userName === values.userName &&
          user.password === values.password
        ) {
          setCookie("userName", user.userName);
          navigate("/dashboard");
          break;
        } else {
          navigate("/errorpage");
        }
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Name </dt>
          <dd>
            <TextField
              label="Enter user name"
              type="text"
              name="userName"
              variant="filled"
              value={formik.values.userName}
              onChange={formik.handleChange}
              size="small"
            />
          </dd>
          {/* <dd><input type="text" name="userName" value={formik.values.userName} onChange={formik.handleChange} /></dd> */}
          <dt>Password</dt>
          <dd>
            <TextField
              label="Enter password"
              type="password"
              name="password"
              variant="filled"
              value={formik.values.password}
              onChange={formik.handleChange}
              size="small"
            />
          </dd>
        </dl>
        <Button type="submit" color="primary" variant="outlined">
          Login
        </Button>
        <br />
        <Link to="/register">New User ?</Link>
      </form>
    </div>
  );
}
