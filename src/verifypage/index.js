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
    ResultCard,
} from './style';

const VerifyPage = () => {


    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <div className="Container">
                    <SearchBoxWrapper>
                        <SearchBox />
                        <TextArea />
                    </SearchBoxWrapper>
                    <ResultWrapper>
                        <p>Scroll And See</p>
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                    </ResultWrapper>
                    </div>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default VerifyPage;