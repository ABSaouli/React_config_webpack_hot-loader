import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";

const renderApp = () => {
  console.log("je rend App je suis la vpoue me chercher nest pas");

  ReactDom.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("app")
  );
};

if (module.hot) {
  module.hot.accept("./components/App", renderApp);
}
renderApp();
