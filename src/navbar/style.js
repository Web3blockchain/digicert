import styled from "styled-components";

export const NavBarWrapper = styled.div`
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
export const NavBarContent = styled.div`
    width: 99%;
    height: 93%;
    border: 2px solid black;
    box-sizing: border-box;
    background-color: red;
    box-shadow: 5px 5px 1px -1px #000000;
    margin-bottom: 2px;
`

export const LogoWrapper = styled.div`
    background-color: #FFFFFF;
    box-sizing: border-box;
    margin-left: .5rem;
    border-radius: 20px;
    height: 100%;
    width: 80px;
    float: left;
    font-size: 32px;
    justify-content: center;
    font-family: Microsoft JhengHei;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: .5s;
    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`
export const OptionButtonWrapper = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    dislay: flex;
    align-items: center;

`

export const OptionButton = styled.button`
    margin-left: 1rem;
    margin-right: 1rem;
    
    text-decoration: none;
    list-style: none;
    font-size: 1.2rem;
    background-color: #FFFFFF;
    border-style: none;
    border-radius: 20px;

    float: right;
    position: relative;

    height: 100%;
    width: 100px;

    transition: .5s;

    font-family: Microsoft JhengHei;

    &:hover {
        background-color: #000080;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`