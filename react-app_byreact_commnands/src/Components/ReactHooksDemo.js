import { useEffect, useState } from "react";

export default function ReactHooksDemoComponent() {
  const [userDetails] = useState([
    { userName: "p1", password: "p1" },
    { userName: "p2", password: "p2" },
    { userName: "p3", password: "p3" },
  ]);
  const [formDetails, setFormDetails] = useState({
    userName: "",
    password: "",
  });

  const [msg, setMsg] = useState();
  function handleUserName(event) {
    setFormDetails({
      userName: event.target.value,
      password: formDetails.password,
    });
  }
  function handlePassword(event) {
    //alert(event.target.value);
    alert(formDetails.userName);
    setFormDetails({
      userName: formDetails.userName,
      password: event.target.value,
    });
  }

  function handleLogin() {
    // userDetails.map((user) => {
    //   alert(user.userName + "==" + user.password);
    //   if (
    //     user.userName === formDetails.userName &&
    //     user.password === formDetails.password
    //   ) {
    //     setMsg(<SuccessComponent />);
    //     return;
    //   } else {
    //     setMsg(<ErrorComponet />);
    //   }
    // });

    for (var user of userDetails) {
      alert(user.userName + "==" + user.password);
      if (
        user.userName === formDetails.userName &&
        user.password === formDetails.password
      ) {
        setMsg(<SuccessComponent />);
        break;
      } else {
        setMsg(<ErrorComponet />);
      }
    }
  }

  return (
    <div className="container">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input onChange={handleUserName} type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input onChange={handlePassword} type="passsword" />
        </dd>
      </dl>
      <button onClick={handleLogin}>Login</button>
      <div>{msg}</div>
    </div>
  );
}

function SuccessComponent() {
  useEffect(() => {
    alert("Success Componetn will mount");
    return () => {
      alert("Success Componetn will Un Mount");
    };
  }, []);
  return (
    <div>
      <h2 className="text-success">Login Success .....</h2>
    </div>
  );
}
function ErrorComponet() {
  useEffect(() => {
    alert("Error Componetn will mount");
    return () => {
      alert("Error Componetn will Un Mount");
    };
  }, []);
  return (
    <div>
      <h2 className="text-danger">Login Error....</h2>
    </div>
  );
}
