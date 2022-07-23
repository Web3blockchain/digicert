import React, { Fragment } from "react";
import NavBar from "./navbar";
import FrontPage from "./frontpage";
import BulletionBoard from "./bulletinboard";
import VerifyPage from "./verifypage";
import ProbSol from "./probsol";
import MintPage from "./mintpage";
import AboutPage from "./aboutpage";

function App() {
  return (
    <Fragment>
      <NavBar />
      <FrontPage />
      <BulletionBoard />
      <MintPage />
      <VerifyPage />
      <ProbSol />
      <AboutPage />
    </Fragment>
  );
}

export default App;
