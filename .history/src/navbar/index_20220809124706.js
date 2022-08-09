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
from './style';

import * as Scroll from 'react-scroll';

const NavBar = () => {
    //declaration of some variable
    const options = [
        
        {
            'title': '關於我們',
            'offset': 3200,
        },
    ];

    const scroll = Scroll.animateScroll;


    //functions
    const getOptionButton = (options) => {
        return (
            options.map((option) => (<OptionButton onClick={()=>scroll.scrollTo(option.offset)}>{option.title}</OptionButton>))
        )
    }

    return (
        <Fragment>
            <NavBarWrapper>
                <NavBarContent>
                    <LogoWrapper onClick={scroll.scrollToTop}>
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