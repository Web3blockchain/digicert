import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    width: 70%;
    height: 60%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    > div.Container {
        display: flex;
        justify-content: baseline;
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
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    border: 1.5px solid black;
    box-shadow: 3px 3px 1px -1px #000000;
    
`
export const SearchBox = styled.div`
    width: 15%;
    height: 100%;
    background-color: #FFFFFF;
    border-left: 1.5px solid black;
    box-sizing: border-box;
`
export const TextArea = styled.textarea`
    width: 85%;
    height: 100%;
    background-color: #FFFFFF;
    outline: none;
    resize: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
    font-size: 45px;
    white-space: nowrap;
    text-shadow: 0px 0px 0px black;
    color: transparent;
    overflow: hidden;
`
export const ResultWrapper = styled.div`
    width: 100%;
    height: 85%;
    background-color: #FFFFFF;
`