import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 720px;
    background-color: #F1F1F2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutWrapper = styled.div`
    width: 70%;
    height: 80%;
    background-color: #F1F1F2;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 7%;

    font-size: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    font-family: NotoSansTC;

    box-sizing: border-box;
    transition: .3s;
`
export const ContentWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    height: 80%;
    box-sizing: border-box;
`

export const ChoiceWrapper = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
`

export const Choice = styled.button`
    border: 1px solid #4F9994;
    text-align: center;
    margin: 0 0 0 0;
    width: 15%;
    height: 60%;
    box-sizing: border-box;
    // border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    background-color: #4F9994;
    > p {
        color: #FFFFFF;
        // font-color: #4F9994;
        font-family: NotoSansTC;
        font-size: 30px;
    }
    &:hover {
        background-color: #4F9994;
        border: 2px solid #4F9994;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
    
`
export const OptionWrapper = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
export const OptionSelect = styled.select`
    width: 80%;
    height: 60%;
    background-color: #F1F1F2;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
    color: black;
    font-family: NotoSansTC;
    border: 1px solid #304C4D;
    > option.visible {
        background-color: #F1F1F2;
        font-size: 15px;
        font-family: NotoSansTC;
    }
`
export const Outcome = styled.div`
    width: 100%;
    height: 50%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 20px;
    word-wrap: break-word;
    font-size: 30px;
    overflow: auto;
    font-family: NotoSansTC;
    padding: 10px 10px 10px 10px;
    transition: 1s;
    &:hover {
        height: 85%;
    }
`