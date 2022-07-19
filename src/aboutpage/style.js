import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 720px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutWrapper = styled.div`
    width: 70%;
    height: 60%;
    background-color: #FFFFFF;
`

export const HeaderContent = styled.button`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    font-size: 30px;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 20px;
    text-align: center;
    font-family: Microsoft JhengHei;

    box-sizing: border-box;
    box-shadow: 1.5px 1.5px 0.5px 0.5px #000000;
    transition: .3s;

    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
        
    }
`
export const ContentWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    background-color: #FFFFFF;
    height: 80%;
    box-sizing: border-box;
`

export const ChoiceWrapper = styled.div`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    border: 2px outset black;
`

export const Choice = styled.select`
    text-align: center;
    margin: 0 0 0 0;
    width: 15%;
    height: 80%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 15px;
    font-color: black;
`

export const Outcome = styled.div`
    width: 100%;
    height: 85%;
    background-color: #FFFFFF;
    word-wrap: break-word;
    font-size: 60px;
    overflow: auto;
`