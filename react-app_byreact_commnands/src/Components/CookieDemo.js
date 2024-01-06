import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function CookieDemoComponetn() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "userName",
    "passsword",
  ]);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.userName === undefined) {
      alert("Please Login.......");
    }
  }, []);

  function handleUserName(event) {
    setUserDetails({
      userName: event.target.value,
      password: userDetails.password,
    });
  }

  function handlePassword(event) {
    setUserDetails({
      userName: userDetails.userName,
      password: event.target.value,
    });
  }

  function handleLogin() {
    setCookie("userName", userDetails.userName, {
      path: "/",
      expires: new Date("2023-11-30"),
    });

    setCookie("passsword", userDetails.password, {
      path: "/",
      expires: new Date("2023-11-30"),
    });
    alert("LoginSuccess");
  }

  function handleLogOut() {
    removeCookie("userName");
    removeCookie("passsword");
    alert("Successfully Logout.............");
  }
  return (
    <div className="container-fluid">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input onChange={handleUserName} type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input onChange={handlePassword} type="password" />
        </dd>
      </dl>
      <button className="btn btn-danger" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-danger ms-3" onClick={handleLogOut}>
        LogOut
      </button>
      <hr />
      <h1>Home</h1>
      Hello ! {cookies.userName} your Password is {cookies.passsword}
    </div>
  );
}
