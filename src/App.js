import React, { Fragment } from "react";
import NavBar from "./navbar";
import FrontPage from "./frontpage";
import BulletionBoard from "./bullentinboard";
import VerifyPage from "./verifypage";
import AboutPage from "./aboutpage";
import MintPage from "./mintpage";

function App() {
  return (
    <Fragment>
      <NavBar />
      <FrontPage />
      <BulletionBoard />
      <MintPage />
      <VerifyPage />
      <AboutPage />
    </Fragment>
  );
}

export default App;
