import React from "react";
import { Route, Redirect } from "react-router-dom";

import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./ApplicationViews";


export const Capstone = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("pub_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />           
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
