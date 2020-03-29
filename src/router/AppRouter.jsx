import { HashRouter, Route } from "react-router-dom";
import React from "react";
import App from "../pages/App";
class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route path="/" component={App} />
        </HashRouter>
      </div>
    );
  }
}

export default AppRouter;
