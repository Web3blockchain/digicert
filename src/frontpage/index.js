import React,{
    Fragment,
    useState,
} from "react";

import { ethers } from 'ethers';

import {
    Wrapper,
    ContentWrapper,
    ButtonWrapper,
    ConnectWalletButton,
} from './style';

const FrontPage = () => {

    const [connectionStatus, setConnectionStatus] = useState('Status: Not Connected To MetaMask.');
    const [accountAddr, setAccountAddr] = useState('');
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);


    const handleButtonClick = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method: 'eth_requestAccounts'})
                .then((res)=>{
                    accountChangeHandler(res[0]);
                    setConnectionStatus('Status: Wallet Connected');
                })
        }
        else
            setConnectionStatus('Please Install MetaMask First');
    };

    const accountChangeHandler = (newAccount) => {
        setAccountAddr(newAccount);
        updateEthers();
    }

    const updateEthers = () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);
        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);
    }

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <p className="Time">2022 Summer</p>
                    <p className="Name">NTU CAE DigiCert Service</p>
                    <ButtonWrapper>
                        <ConnectWalletButton onClick={handleButtonClick}><p>Connect Wallet</p></ConnectWalletButton>
                    </ButtonWrapper>
                    <p className="Status">{connectionStatus}</p>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    );
}

export default FrontPage;