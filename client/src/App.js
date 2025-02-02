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
import Images from "./dashboard_components/Admin Dashboard/Image/Image";
import Appointment from "./dashboard_components/Admin Dashboard/Appointment/Appointment";
import Email from "./dashboard_components/Admin Dashboard/Email/Email";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'react-awesome-slider/dist/styles.css';
import "animate.css/animate.min.css";
import Reset from "./dashboard_components/Reset Password/Reset";
import EmploymentAdvice from "./components/ServiceParts/EmploymentAdvice";
import TaxAdvice from "./components/ServiceParts/TaxAdvice";
import FAAdvice from "./components/ServiceParts/FAAdvice";

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

  createEmail = () => {
    fetch(process.env.REACT_APP_CREATE_EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       email: "abc@gmail.com",
       password: "1234"
     })
    })
      .then(res => res.json())
      .then(json => {})
      .catch(err => console.log(err));
  };

  checkEmail = () => {
    fetch(process.env.REACT_APP_GET_EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          if (!json.email) {
            this.createEmail();
          }
        }
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.checkSecretKey();
    this.checkEmail()
  }
  render() {
    return (
      <div style={{overflowX: "hidden"}}>
        <BrowserRouter >
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/quienes_somos" component={About} exact />
              <Route path="/servicios" component={Services} exact />
              <Route
                path="/servicios/servicios_de_traducción_de_inglés"
                component={AdditionalServices}
                exact
              />
              <Route path="/servicios/asesoría_laboral" component={EmploymentAdvice} exact />
              <Route path="/servicios/asesoría_tributaria" component={TaxAdvice} exact />
              <Route path="/servicios/asesoría_contable_financiera" component={FAAdvice} exact />
              <Route path="/registro" component={Register} exact />
              <Route path="/comentarios" component={Feedback} exact />

              {/* Dashboard Start Routes */}
              <Route path="/Login" component={Login} exact />
              <Route path="/Regístrate" component={Signup} exact />
              <Route path="/Imágenes" component={Images} exact />
              <Route path="/Tablero" component={Dashboard} exact />
              <Route path="/Perfil" component={Profile} exact />
              <Route path="/Llave" component={SecretKey} exact />
              <Route path="/Equipo" component={Appointment} exact />
              <Route path="/Email" component={Email} exact />
              <Route path="/reset/password" component={Reset} />
              {/*Dashboard End Routes*/}

              <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
