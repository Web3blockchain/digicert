import React, {
    Fragment, 
    useState,
} from "react";

import {
    Wrapper,
    ContentWrapper,
    SearchBoxWrapper,
    SearchBox,
    TextArea,
    ResultWrapper,
    ResultCard,
    ModalCard,
} from './style';

import {
    ModalProvider,
} from 'styled-react-modal';

const VerifyPage = () => {

    const [show, setShow] = useState(false);

    return (
        <ModalProvider>
            <Wrapper>
                <ContentWrapper>
                    <div className="Container">
                    <SearchBoxWrapper>
                        <SearchBox />
                        <TextArea><TextArea>
                    </SearchBoxWrapper>
                    <ResultWrapper>
                        <ResultCard
                            onClick={()=>{setShow(!show)}} 
                        />
                        <ResultCard
                            onClick={()=>{setShow(!show)}}
                        />
                    </ResultWrapper>
                    </div>
                </ContentWrapper>
            </Wrapper>
            <ModalCard
                isOpen={show}
                onClick={()=>{setShow(!show)}}
                onBackgroundClick={()=>{setShow(!show)}}
                onEscapeKeydown={()=>{setShow(!show)}}
                allowScroll={true}
            />
        </ModalProvider>
    )
}

export default VerifyPage;