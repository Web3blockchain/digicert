import React, { 
    Fragment
} from "react";
import {
    Wrapper,
    ContentWrapper,
    DisplayWrapper,
    ButtonContainer,
    PrevButton,
    NextButton,
    ButtonWrapper,
    GalleryWrapper,
    MediaButtonWrapper,
    MintButton,
    CentralContainer,
} from './style';

const MintPage = () => {

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <DisplayWrapper>
                        <ButtonContainer>
                            <PrevButton></PrevButton>
                        </ButtonContainer>
                        <CentralContainer>
                            <div className="top" />
                            <div className="bottom">
                                <MintButton><p>Mint</p></MintButton>
                            </div>
                        </CentralContainer>
                        <ButtonContainer>
                            <NextButton />
                        </ButtonContainer>
                    </DisplayWrapper>
                    <ButtonWrapper>
                        <MediaButtonWrapper>
                            <div className="Icon" />
                            <i class="fi fi-brands-instagram"></i>
                            <p>Webe</p>
                        </MediaButtonWrapper>
                        <MediaButtonWrapper>
                            <div className="Icon" />
                            <p>Website</p>
                        </MediaButtonWrapper>
                        <MediaButtonWrapper>
                            <div className="Icon" />
                            <p>Website</p>
                        </MediaButtonWrapper>
                        <MediaButtonWrapper>
                            <div className="Icon" />
                            <p>Website</p>
                        </MediaButtonWrapper>
                    </ButtonWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
};

export default MintPage;