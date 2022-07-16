import React, { Fragment } from "react";
import NavBar from "./navbar";
import FrontPage from "./frontpage";
import BulletionBoard from "./bullentinboard";
import VerifyPage from "./verifypage";
import AboutPage from "./aboutpage";

function App() {
  return (
    <Fragment>
      <NavBar />
      <FrontPage />
      <BulletionBoard />
      <VerifyPage />
      <AboutPage />
    </Fragment>
  );
}

export default App;
