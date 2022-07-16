import React, {
    Fragment,
} from "react";

import {
    Wrapper,
    ContentWrapper,
    SearchBoxWrapper,
    SearchBox,
    TextArea,
    ResultWrapper,
} from './style';

const VerifyPage = () => {
    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <div className="Container">
                    <SearchBoxWrapper>
                        <SearchBox className = "A"/>
                        <TextArea className="B"/>
                    </SearchBoxWrapper>
                    <ResultWrapper />
                    </div>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default VerifyPage;