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
                        <TextArea 
                            placeholder="測試測試"
                        />
                        <TextArea>
                            <Input placeholder="A small text input" size="1em" />
                        </TextArea>
                         
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