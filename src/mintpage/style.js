import styled from "styled-components";
import InstagramLogo from '../img/instagram.png';
import Background_1 from '../img/background_1.png';
import PrevLogo from '../img/angle-left.png';
import NextLogo from '../img/angle-right.png';

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: black;
    background-color: #FFFFFF;
`

export const ContentWrapper  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const DisplayWrapper = styled.div`
    width: 99%;
    height: 60%;
    margin-left: .35rem;
    margin-top: .5rem;
    background-image: url(${Background_1});
    bacground-size: contain;
    background-repear: norepeat;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ButtonContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CentralContainer = styled.div`
    width: 80%;
    height:  100%;
    display: flex;
    flex-direction: column;
    > div.top {
        width: 100%;
        height: 80%;
    }
    > div.bottom {
        width: 100%;
        height: 20%;
    }
`

export const NextButton = styled.div`
    width: 45%;
    height: 15%;
    box-sizing: border-box;
    border-radius: 20px;
    background-image: url(${NextLogo});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 10%;
    transition: .3s;
    &:hover {
        opacity: 50%;
        background-color: #FFFFFF;
        border: 2px solid black;
        transform: scale(1.03, 1.03);
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`
export const PrevButton = styled.div`
    width: 45%;
    height: 15%;
    box-sizing: border-box;
    border-radius: 30px;
    border-radius: 20px;
    background-image: url(${PrevLogo});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 10%;
    transition: .3s;
    &:hover {
        opacity: 50%;
        background-color: #FFFFFF;
        border: 2px solid black;
        transform: scale(1.03, 1.03);
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`


export const ButtonWrapper = styled.div`
    width: 100%;
    height: 13%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const GalleryWrapper = styled.div`
    width: 100%;
    height: 20%;
    background-color: green;
    box-sizing: border-box;
`

export const MediaButtonWrapper = styled.div`
    width: 16%;
    height: 65%;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 0;
    > div {
        background-image: url(${InstagramLogo});
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #FFFFFF;
        width: 30%;
        height: 50%;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }
    > p {
        text-align: center;
        background-color: #FFFFFF;
        padding-top: .1rem;
        width: 55%;
        height: 51%;
        font-size: 24px;
        font-family: 'Microsoft JhengHei';
        margin: 0 0 0 0;
        
    }
`

export const MintButton = styled.div`
    width: 100%;
    height: 70%;
    box-sizing: border-box;
    border-radius: 20px;
    border: .5px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    > p {
        text-align: center;
        font-size: 30px;
        font-family: 'Microsoft JhengHei';
        color: #FFFFFF;
    }
    
    &:hover {
        background-color: #FFFFFF;
        transform: scale(1.03, 1.03);
        box-shadow: 3px 3px 0.5px 0.5px #000000;
        > p {
            color: #000000;
        }
    }
`

