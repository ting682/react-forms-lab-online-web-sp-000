import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {

    

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleLogin = (event) => {
  //   event.preventDefault()

  // }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault()
        if (this.state.username === "" || this.state.password === "") {

        } else {
          this.props.handleLogin(this.state.username, this.state.password)
        }
      }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
