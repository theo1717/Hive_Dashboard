/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

const isAuthenticated = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/redirect",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <PrivateRoute path="/admin/*">
        <Route render={props => <AdminLayout {...props} />} />
      </PrivateRoute>
      <PrivateRoute path="/admin">
        <Redirect to="/admin/dashboard" />
      </PrivateRoute>
      <Route
        exact
        path="/redirect"
        component={() => {
          window.location.href = "https://hivetech.com.br";
          return null;
        }}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
