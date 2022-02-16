import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    //removing the token from local storage
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
