import { createContext, useContext, useState } from "react";

var useDetailsContext = createContext(null);

export default function UseContextDemoComonent() {
  const [userDetails, setUSerDetails] = useState({
    userName: "",
    Email: "",
  });
  function handleUserName(e) {
    setUSerDetails({
      userName: e.target.value,
      Email: userDetails.Email,
    });
  }
  function handleEmial(e) {
    setUSerDetails({
      userName: userDetails.userName,
      Email: e.target.value,
    });
  }
  function handleLogin() {
    setUSerDetails({
      userName: userDetails.userName,
      Email: userDetails.Email,
    });
  }
  return (
    <useDetailsContext.Provider value={userDetails}>
      <div className="container-fluid bg-info text-white p-3">
        <h2>Home Page</h2>
        <div className="container">
          <dl>
            <dt>User Name</dt>
            <dd>
              <input onChange={handleUserName} type="text" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input onChange={handleEmial} type="email" />
            </dd>
          </dl>
          <button className="btn btn-danger" onClick={handleLogin}>
            Login
          </button>
        </div>
        <NavaBarComponent />
      </div>
    </useDetailsContext.Provider>
  );
}

function NavaBarComponent() {
  var userDetails = useContext(useDetailsContext);
  return (
    <div>
      <h1>Nava Bar :-{userDetails.userName}</h1>
      <MainComponent />
    </div>
  );
}
function MainComponent() {
  var userDetails = useContext(useDetailsContext);
  return (
    <div className="d-flex justify-content-between bg-dark text-white p-3">
      <div className="btn-group">
        <button className="btn btn-primary">Profile</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary">
          UserName :-{userDetails.Email}
        </button>
      </div>
    </div>
  );
}
