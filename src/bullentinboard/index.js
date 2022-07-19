import React,{
    Fragment,
} from "react";

import { 
    annouceContent,
} from "./data";

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

    const getAnnounceContent = (items) => {
        return (
            items.map((item)=>(
                <RecentAnounce>
                    <RecentAnnounceDate><p>{item.date}</p></RecentAnnounceDate>
                        <p>{item.text}</p>
                </RecentAnounce>
            ))
        );
    }

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <RecentAnnounceWrapper>
                        <RecentAnnounceTitle><p>最新公告 / News</p></RecentAnnounceTitle>
                            {getAnnounceContent(annouceContent)}
                        <ButtonWrapper>
                            <PrevButton>Prev</PrevButton>
                            <NextButton>Next</NextButton>
                        </ButtonWrapper>
                    </RecentAnnounceWrapper>
                    <NewAnnounceWrapper>
                        <div className="Container">
                            <NewDate><p>5/17</p></NewDate>
                            <NewContent><p>今日靜思語：哈哈</p></NewContent>
                        </div>
                    </NewAnnounceWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default BulletionBoard;