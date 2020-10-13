import React, { useState } from 'react';

import './assets/css/main.css';
import './assets/css/messages.css';
import './assets/css/style.css';
import './assets/css/modal.css';

import { BrowserRouter as Router, Switch} from "react-router-dom";
import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";
import Login from "./Pages/Login/Login";
import LayoutwithSidebar from "./components/Layout/LayoutwithSidebar";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
// import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { sideBarRoutes } from './utils/routes';

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

  const handleCollapse = (status) => {
    setIsSidebar(!status)
  }
  return (
    <>

      <div className={`app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header ${isSidebar ? 'closed-sidebar' : ''}`}>
        <Router>
          <Switch>
            <PublicRoute exact path='/' component={Login}></PublicRoute>
            <PublicRoute exact path='/forgotPassword' component={ForgotPassword}></PublicRoute>
            <Switch>
              <LayoutwithSidebar parentCallback={handleCollapse}>
                <Switch>
                  {sideBarRoutes.map((item, index) => {
                    return (
                      <PrivateRoute
                        path={item.path}
                        exact
                        component={item.component}
                        key={index}
                      />)
                  })}
                </Switch>
              </LayoutwithSidebar>
            </Switch>
          </Switch>
        </Router>
      </div>


    </>
  );
}

export default App;

