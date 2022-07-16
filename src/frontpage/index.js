import React,{
    Fragment,
    useState,
} from "react";

import {
    Wrapper,
    ContentWrapper,
    ButtonWrapper,
    ConnectWalletButton,
} from './style';

const FrontPage = () => {

    const [connectionStatus, setConnectionStatus] = useState('Not Connected To MetaMask.')

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <p className="Time">2022 Summer</p>
                    <p className="Name">NTU CAE DigiCert Service</p>
                    <ButtonWrapper>
                        <ConnectWalletButton><p>Connect Wallet</p></ConnectWalletButton>
                    </ButtonWrapper>
                    <p className="Status">{connectionStatus}</p>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    );
}

export default FrontPage;