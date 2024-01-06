import React from "react";

class LoginSuccessComponent extends React.Component {
  componentDidMount() {
    alert("Login Component did mount...");
  }
  componentWillUnmount() {
    alert("Login Component will un mount...");
  }
  render() {
    return (
      <div>
        <h2 className="text-success">Login Success .....</h2>
      </div>
    );
  }
}
class ErrorComponet extends React.Component {
  componentDidMount() {
    alert("Error Component did mount...");
  }
  componentWillUnmount() {
    alert("Error Component will un mount...");
  }
  render() {
    return (
      <div>
        <h2 className="text-danger">Login Error....</h2>
      </div>
    );
  }
}

export class ClassLifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDetails: {
        userName: "p1",
        password: "p1",
      },
      formDetails: {
        userName: "",
        password: "",
      },
      result: "",
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleUserName(event) {
    this.setState({
      formDetails: {
        userName: event.target.value,
        password: this.state.formDetails.password,
      },
    });
  }
  handlePassword(event) {
    this.setState({
      formDetails: {
        userName: this.state.formDetails.userName,
        password: event.target.value,
      },
    });
  }
  handleLogin() {
    alert("clicked");
    console.log(this.state);
    if (
      this.state.formDetails.userName === this.state.UserDetails.userName &&
      this.state.formDetails.password === this.state.UserDetails.password
    ) {
      alert("==");
      this.setState({
        result: <LoginSuccessComponent />,
      });
    } else {
      alert("!=");
      this.setState({
        result: <ErrorComponet />,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <dl>
          <dt>User Name</dt>
          <dd>
            <input onChange={this.handleUserName} type="text" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input onChange={this.handlePassword} type="passsword" />
          </dd>
        </dl>
        <button onClick={this.handleLogin}>Login</button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
