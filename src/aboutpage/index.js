import React, {
    Fragment, useState,memo,
}
from "react";
import {
    Wrapper,
    AboutWrapper,
    HeaderContent,
    ContentWrapper,
    ChoiceWrapper,
    Choice,
    Outcome
} from './style'
import { Choices } from "./data";

const AboutPage = () => {
    const text = 'mrrfioefjoejfiojijjjjcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccjjjjjjjjjjjjjjjjjjjjjjjcmdddddddddddddddd'

    const [buttonStatus, setButtonStatus] = useState(false);
    const getHeaderContenr = (status) =>{
        return status? 'Problem Solving':'About Us';
    };

    const getOptions = (items) => {
        return (items.map((item)=>(
            <option>{item}</option>
        )))
    };

    return (
        <Fragment>
            <Wrapper>
            <AboutWrapper>
                <HeaderContent onClick={() => setButtonStatus(!buttonStatus)}>
                    {getHeaderContenr(buttonStatus)}
                </HeaderContent>
                <ContentWrapper>
                    <ChoiceWrapper>
                        <Choice>{getOptions(Choices[0])}</Choice>
                        <Choice>{getOptions(Choices[1])}</Choice>
                        <Choice>{getOptions(Choices[2])}</Choice>
                    </ChoiceWrapper>
                    <Outcome>{text}</Outcome>
                </ContentWrapper>          
            </AboutWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default memo(AboutPage);
