import styled from "styled-components";

export const NavBarWrapper = styled.div`
    position: sticky;
    width: 100%;
    height: 65px;
`

export const LogoWrapper = styled.div`
    background-color: #6E62BC;
    margin-left: 0.5rem;
    height: 65px;
    width: 80px;
    float: left;
    font-size: 32px;
    justify-content: center;
`
export const OptionButtonWrapper = styled.div`
    background-color: #5042AD;
    height: 65px;
`

export const OptionButton = styled.button`
    margin-left: 1rem;
    margin-right: 1rem;

    text-decoration: none;
    list-style: none;
    font-size: 1.2rem;
    background-color: #5042AD;
    border-style: none;
    border-radius: 20px;

    float: right;
    position: relative;

    height: 100%;
    width: 100px;

    transition: .5s;


    &:hover {
        background-color: #BC6E62;
        transform: scale(1.03, 1.03);
        color: white;
    }
`