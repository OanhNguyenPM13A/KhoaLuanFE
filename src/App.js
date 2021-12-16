import { Router } from "@material-ui/icons";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomizedSnackbars from "./common/CustomizedSnackbars";
import LoadingComponent from "./component/GlobalSettings/LoadingComponent";
import DoiMatKhau from "./containers/doiMatKhau";
import Login from "./containers/login/Login";
import PageNotFound from "./containers/pageNotFound";
import { LayoutMain } from "./routers";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <LoadingComponent />
        <Suspense fallback={LoadingComponent}>
          <CustomizedSnackbars />
          {/* <Notify /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            {LayoutMain.map((layout, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={layout.path}
                  component={layout.component}
                />
              );
            })}
            <Redirect from="/" to="/login" />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
