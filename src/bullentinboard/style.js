import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: black;
`

export const ContentWrapper = styled.div`
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const RecentAnnounceWrapper = styled.div`
    width: 60%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const RecentAnnounceTitle = styled.div`
    width: 100%;
    height: 20%;
    background-color: #FFFFFF;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        background-color: #FFFFFF;
        font-size: 34px;
        font-family: Microsoft JhengHei;
    }
`

export const RecentAnounce = styled.div`
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    > p {
        text-align: center;
        padding-top: .3rem;
        padding-left: 1.3rem;
        font-size: 20px;
        font-family: Microsoft JhengHei;
    }

`

export const RecentAnnounceDate = styled.div`
    width:25%;
    height: 100%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        text-align: center;
        background-color: #FFFFFF;
        font-size: 24px;
        font-weight: 900;
        font-family: Microsoft JhengHei;
    }
    border-right: 2px solid black;
`

export const NewAnnounceWrapper = styled.div`
    width: 40%;
    height: 100%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    box-shadow: 1.5px 1.5px 0.5px 0.5px #000000;
    align-items: center;
    > div.Container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
    }
    transition: .3s;
    &:hover {
        box-shadow: 4px 4px 2px 2px #000000;
    }
`

export const NewDate = styled.div`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border-bottom: 2px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        font-size: 45px;
        font-family: Microsoft JhengHei;
        padding-bottom: 20px;
    }
`

export const NewContent = styled.div`
    width: 97%;
    height: 85%;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    background-color: #FFFFF;
    font-family: Microsoft JhengHei;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NextButton = styled.button`
    width: 20%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid black;
    background-color: #FFFFFF;
    //box-shadow: 1px 1px .3px .3px #000000;
    transition: .3s;
    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
        
    }
`

export const PrevButton = styled.button`
    width: 20%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid black;
    background-color: #FFFFFF;
    //box-shadow: .8px .8px .2px px #000000;
    transition: .3s;
    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
        
    }
`