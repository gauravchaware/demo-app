import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import AppLayout from "../components/Layout";
import Loading from "../components/UI/Loading";

const Users = lazy(() => import("../containers/Users"));

const Routes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/users" component={Users} />
            <Redirect to={"/users"} />
          </Switch>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
};

export default Routes;
