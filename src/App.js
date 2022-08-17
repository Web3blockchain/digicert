import React, { 
  Fragment,
  useState,
} from "react";
import NavBar from "./navbar";
import FrontPage from "./frontpage";
import BulletionBoard from "./bulletinboard";
import VerifyPage from "./verifypage";
import ProbSol from "./probsol";
import MintPage from "./mintpage";
import AboutPage from "./aboutpage";
import { useCallback } from "react";

function App() {
  const [accountAddr, setAccountAddr] = useState('');

  const addrCallback = useCallback((addr)=>{
    setAccountAddr(addr);
  }, []);

  return (
    <Fragment>
      <NavBar />
      <FrontPage 
        parentCallback={addrCallback}/>
      <BulletionBoard />
      <MintPage 
        accountAddr={accountAddr}/>
      <VerifyPage />
      <ProbSol />
      <AboutPage />
    </Fragment>
  );
}

export default App;
