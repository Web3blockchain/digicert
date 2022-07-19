import React,{
    Fragment,
} from "react";

import {
    NavBarWrapper,
    NavBarContent,
    LogoWrapper,
    OptionButtonWrapper,
    OptionButton,
}
from './style'

const NavBar = () => {
    //declaration of some variable
    const options = ['最新公告','證書領取','資訊驗證','問題排解'];

    //declaration of react hooks.


    //functions
    const getOptionButton = (options) => {
        return (
            options.map((option) => (<OptionButton>{option}</OptionButton>))
        )
    }

    return (
        <Fragment>
            <NavBarWrapper>
                <NavBarContent>
                    <LogoWrapper>
                        <p>CAE</p>
                    </LogoWrapper>
                    <OptionButtonWrapper>
                        {getOptionButton(options)}
                    </OptionButtonWrapper>
                </NavBarContent>
            </NavBarWrapper>
        </Fragment>
    )
}

export default NavBar;