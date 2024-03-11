import {
  BrowserRouter as Router,
  Navigate as Redirect,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routeConstant";

import React, { Suspense } from "react";
import { useAppSelector } from "../store/hooks";

const Routes = (): React.JSX.Element => {
  const { access: isAccessToken } = useAppSelector((store) => store?.user);

  return (
    <Router>
      <Suspense fallback={"Loading...."}>
        <Switch>
          {!isAccessToken ? (
            <>
              {publicRoutes.map(({ path, element: Element }, index) => (
                <Route key={index} path={path} element={<Element />} />
              ))}
              <Route path="/" element={<Redirect to="/login" replace />} />
              <Route path="*" element={<Redirect to="/" replace />} />
            </>
          ) : (
            <Route
              path="/auth/login"
              element={<Redirect to="/home" replace />}
            />
          )}
          {isAccessToken && (
            <>
              {privateRoutes.map(({ path, element }, index) => {
                const Element: React.FC<unknown> = element;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <div id="app">
                        <div>
                          <Element />
                        </div>
                      </div>
                    }
                  />
                );
              })}
              <Route path="/" element={<Redirect to="/home" replace />} />
              <Route
                path="*"
                element={<Redirect to="/page-not-found" replace />}
              />
            </>
          )}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
