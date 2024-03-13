import {
  BrowserRouter as Router,
  Navigate as Redirect,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routeConstant";

import React, { Suspense } from "react";
import { useAppSelector } from "../store/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Routes = (): React.JSX.Element => {
  const { access: isAccessToken } = useAppSelector((store) => store?.user);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        closeButton
        pauseOnHover
        limit={1}
      />
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
                path="/login"
                element={<Redirect to="/dashboard" replace />}
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
                <Route
                  path="/"
                  element={<Redirect to="/dashboard" replace />}
                />
                <Route
                  path="*"
                  element={<Redirect to="/page-not-found" replace />}
                />
              </>
            )}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default Routes;
