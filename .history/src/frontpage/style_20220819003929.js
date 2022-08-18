import styled, { keyframes } from "styled-components";
import Frontpage from '../img/background/frontgraph.png'


const config = {
    backgroundColor: '#A0D7D5',
    fontFamily: 'Microsoft JhengHei',
    fontColor: '#000000',
}

const TypingAnimation = keyframes`
    from {width: 0;}
    to {width: 100%;}
`

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 1.5px solid black;
`

export const ContentWrapper = styled.div`
    width: 70%;
    height: 40%;
    > p.Time {
        font-size: 35px;
        color: ${config.fontColor};
        padding: 10px 10px 10px 10px;
        font-family: ${config.fontFamily};
    }
    > p.Name {
        background-color: #FFFFF;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        letter-space: .15em;
        animation: ${TypingAnimation} 3s steps(25,end) forwards;
        
        font-size: 70px;
        color: ${config.fontColor};
        padding: 20px 20px 20px 10px;
        font-family: ${config.fontFamily};
    }
    > p.Status {
        font-size: 24px;
        text-align: center;
        font-family: ${config.fontFamily};
    }
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    // margin: 90px 0 10px 0;
    padding: 90px 0 -0px 0;
    // background-color: #304C4D;
    background-image: url(${Frontpage});
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F1F1F2;
`

export const ConnectWalletButton = styled.button`

    width: 20%;
    height: 30%;

    border-radius: 20px;
    border: 1px solid black;
    background-color: #4F9994;
    box-sizing: border-box;
    box-shadow: 1.5px 1.5px 0.5px 0.5px #000000;
    transition: .3s;
    
 
    > p {
        font-size: 22px;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        font-family: ${config.fontFamily};
    }

    &:hover {
        background-color: #30434D;
        transform: scale(1.03, 1.03);
        color: #F1F1F2;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
  
`
