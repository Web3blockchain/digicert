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
            'order': 10,
            'title': '首頁',
            'offset': 0,
        },
        {
            'order': 9,
            'title': '最新公告',
            'offset': 600,
        },
        {
            'order': 8,
            'title': '證書領取',
            'offset': 1200,
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