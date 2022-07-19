import styled from "styled-components";
import SearchLogo from '../img/search.png';

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
    justify-content: center;
    > div.Container {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

export const SearchBoxWrapper = styled.div`
    width: 100%;
    height: 15%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    transition: 1.5s;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
    border: 1.5px solid black;
    box-shadow: 3px 3px 3px -1px #000000;
    margin-bottom: 5px;
`
export const SearchBox = styled.div`
    width: 6%;
    height: 60%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    transition: .3s;
    background-image: url(${SearchLogo});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
    }
`
export const TextArea = styled.textarea`
    width: 91%;
    height: 100%;
    background-color: #FFFFFF;
    border-left: 0px;
    border-top: 0px;
    border-bottom: 0px;
    border-right: 1.5px solid black;
    outline: none;
    resize: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
    font-size: 45px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    font-family: 'Microsoft JhengHei';
`
export const ResultWrapper = styled.div`
    width: 100%;
    height: 83%;
    overflow: auto;
    white-space: nowrap;
    background-color: #FFFFFF;
    box-sizing: border-box;
    display: block;
    > p {
        margin-left: 5px;
        font-size: 30px;
        font-family: Microsoft JhengHei;
        margin-top: 5px;
    }
`

export const ResultCard = styled.div`
    background-color: #FFFFFF;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    width: 89%;
    height: 90%;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid black;
`
