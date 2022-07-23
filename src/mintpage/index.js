import React, { 
    Fragment,
    useState,
} from "react";
import {
    Wrapper,
    ContentWrapper,
    DisplayWrapper,
    ButtonContainer,
    PrevButton,
    TopContainer,
    YearSelect,
    NextButton,
    ButtonWrapper,
    GalleryWrapper,
    MediaButton,
    SocialIcon,
    MintButton,
    MintButtonContainer,
    CentralContainer,
    DotWrapper,
    Dot,
} from './style';

import {
    allType,
    allProgram,
} from '../data/mintpage';

const MintPage = () => {

    const programType = [...allType];

    const [pageCount, setPageCount] = useState(0);

    const [year, setYear] = useState(allProgram[allType[pageCount]].year[0]);

    const handlePrevButtonClick = () => {
        const num = (pageCount===0)? programType.length-1:pageCount-1;
        console.log(num);
        setPageCount(num);
        setYear(allProgram[allType[num]].year[0])
    }

    const handleNextButtonClick = () => {
        const num = (pageCount===programType.length-1)? 0:pageCount+1;
        setPageCount(num);
        setYear(allProgram[allType[num]].year[0])
    }

    const getOptions = (items) => {
        return (items.map((item)=>(
            <option className="option" value={item}>{item}</option>
        )));
    };
    
    const getAllSocialMediaButton = (Des, year) => {
        if(Des===undefined)
            return;
        const yearData = Des[year];
        const socialMedia = yearData.socialIcons;
        return (socialMedia.map((item)=>{
            return (
                <MediaButton href={item.URL} target="_blank">
                    <SocialIcon className={item.type} />
                    <p>{item.title}</p>
                </MediaButton>
            )
        }))
    };
    const getDotItems = () =>{
        const dotArray = [];
        for(let i=0;i<allType.length;i++){
            if(i===pageCount)
                dotArray.push(<Dot className="black" />)
            else
                dotArray.push(<Dot className="white"/>)
        }
        return dotArray;
    }

    const handleMintButtonClick = () => {
        
    }


    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <DisplayWrapper className={programType[pageCount]}>
                        <ButtonContainer>
                            <PrevButton onClick={handlePrevButtonClick}></PrevButton>
                        </ButtonContainer>
                        <CentralContainer>
                            <TopContainer>
                                <p>{allProgram[programType[pageCount]].title}</p>
                                <div className="selectWrapper">
                                    <YearSelect onChange={(e)=>setYear(e.target.value)}>
                                        {getOptions(allProgram[programType[pageCount]].year)}
                                    </YearSelect>
                                </div>
                            </TopContainer>
                            <DotWrapper>
                                <div className='dot'>
                                    {getDotItems()}
                                </div>
                            </DotWrapper>
                            <MintButtonContainer>
                                <MintButton><p>Mint</p></MintButton>
                            </MintButtonContainer>
                        </CentralContainer>
                        <ButtonContainer>
                            <NextButton onClick={handleNextButtonClick}/>
                        </ButtonContainer>
                    </DisplayWrapper>
                    <ButtonWrapper>
                        {getAllSocialMediaButton(allProgram[programType[pageCount]].description, year)}
                    </ButtonWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
};

export default MintPage;
