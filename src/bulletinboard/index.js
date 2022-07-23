import React,{
    Fragment,
    useState,
} from "react";

import { 
    annouceContent,
} from "../data/bulletinboard";

import {
    Wrapper,
    ContentWrapper,
    RecentAnnounceWrapper,
    NewAnnounceWrapper,
    RecentAnnounceTitle,
    RecentAnounce,
    RecentAnnounceDate,
    NewDate,
    NewContent,
    ButtonWrapper,
    NextButton,
    PrevButton,
} from './style';


const BulletionBoard = () => {

    const [count, setCount] = useState(0);

    const loadLimit = 6;

    const getContent = (item, flag, type) => {
        console.log(type);
        if(flag==true){
            return (
                <RecentAnounce className={type}>
                    <RecentAnnounceDate><p className={type}>{item.date}</p></RecentAnnounceDate>
                        <p>{item.text}</p>
                </RecentAnounce>
            );
        }
        else{
            return (<RecentAnounce />)
        }
    };

    const getAnnounceContent = (items, count) => {
        let ItemArray = [];
        for(let i=loadLimit*count;i<loadLimit*count+loadLimit;i++){
            const type = (i%2===0)? 'odd':'even';
            if(i>=items.length)
                ItemArray.push(getContent('empty',false))
            else 
                ItemArray.push(getContent(items[i],true,type));
        }
        return ItemArray;
    }

    const handlePrevButtonClick = () =>{
        if(count!=0) setCount(count-1);
    }

    const handleNextButtonClick = () =>{
        if((count+1)*loadLimit<annouceContent.length)
            setCount(count+1);
    }

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <RecentAnnounceWrapper>
                        <RecentAnnounceTitle>
                            <div className="icon" />
                            <p>最新公告 / News</p>
                        </RecentAnnounceTitle>
                            {getAnnounceContent(annouceContent,count)}
                        <ButtonWrapper>
                            <PrevButton onClick={handlePrevButtonClick} className={count==0? 'hidden':'visible'}>Prev</PrevButton>
                            <NextButton onClick={handleNextButtonClick} className={(count+1)*loadLimit>=annouceContent.length? 'hidden':'visible'}>Next</NextButton>
                        </ButtonWrapper>
                    </RecentAnnounceWrapper>
                    <NewAnnounceWrapper>
                        <div className="Container">
                            <NewDate><p></p></NewDate>
                            <NewContent><p></p></NewContent>
                        </div>
                    </NewAnnounceWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default BulletionBoard;