import React, { Component } from "react";
import "./style/style.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "tachyons";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import AdditionalServices from "./components/Services/AdditionalServices";
import Register from "./components/Registration/Register";
import Feedback from "./components/Feedback/Feedback";
import NotFound from "./components/Not Found/NotFound";
import Signup from "./dashboard_components/Signup/Signup";
import Dashboard from "./dashboard_components/Admin Dashboard/Dashboard/Dashboard";
import Profile from "./dashboard_components/Admin Dashboard/Profile/Profile";
import Login from "./dashboard_components/Login/Login";
import SecretKey from "./dashboard_components/Admin Dashboard/Secret Key/SecretKey";
import Appointment from "./dashboard_components/Admin Dashboard/Appointment/Appointment";

class App extends Component {
  createSecretKey = () => {
    fetch(process.env.REACT_APP_CREATE_KEY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: process.env.REACT_APP_SECRET_KEY })
    })
      .then(res => res.json())
      .then(json => {})
      .catch(err => console.log(err));
  };

  checkSecretKey = () => {
    fetch(process.env.REACT_APP_GET_KEY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          if (!json.key) {
            this.createSecretKey();
          }
        }
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.checkSecretKey();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/acerca_da" component={About} exact />
          <Route path="/servicios" component={Services} exact />
          <Route
            path="/servicios_adicionales"
            component={AdditionalServices}
            exact
          />
          <Route path="/registro" component={Register} exact />
          <Route path="/comentarios" component={Feedback} exact />

          {/* Dashboard Start Routes */}
          <Route path="/Login" component={Login} exact />
          <Route path="/AdminSignup" component={Signup} exact />
          <Route path="/AdminDashboard" component={Dashboard} exact />
          <Route path="/AdminProfile" component={Profile} exact />
          <Route path="/AdminSecretKey" component={SecretKey} exact />
          <Route path="/AdminEquipo" component={Appointment} exact />
          {/*Dashboard End Routes*/}

          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
