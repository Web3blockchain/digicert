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
    background-color: #FFFFFF;
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
    height: 16%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    > p {
        text-align: center;
        padding-top: 1.3rem;
        padding-left: 1.3rem;
        font-size: 20px;
        font-family: Microsoft JhengHei;
    }

`

export const RecentAnnounceDate = styled.div`
    width:25%;
    height: 90%;
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
    align-items: center;
    > div.Container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
    }
`

export const NewDate = styled.div`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    text-align: center;
    display: flex;
    justify-content: center;
    > p {
        font-size: 45px;
        font-family: Microsoft JhengHei;
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