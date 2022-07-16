import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: black;
`

export const ContentWrapper = styled.div`
    width: 70%;
    height: 70%;
    > p.Time {
        font-size: 40px;
        color: black;
        padding: 10px 10px 10px 10px;
        font-family: Microsoft JhengHei;
    }
    > p.Name {
        font-size: 70px;
        color: black;
        padding: 20px 20px 20px 10px;
        font-family: Microsoft JhengHei;
    }
    > p.Status {
        font-size: 25px;
        text-align: center;
        font-family: Microsoft JhengHei;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConnectWalletButton = styled.button`

    width: 20%;
    height: 30%;

    border-radius: 20px;
    border: 2px solid black;
    background-color: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 1.5px 1.5px 0.5px 0.5px #000000;
    transition: .3s;
 
    > p {
        font-size: 22px;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        font-family: 'Dosis', sans-serif;
    }

    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }

    
  
`
