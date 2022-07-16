import React,{
    Fragment,
    useState,
} from "react";

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
} from './style';


const BulletionBoard = () => {

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <RecentAnnounceWrapper>
                        <RecentAnnounceTitle><p>最新公告 / News</p></RecentAnnounceTitle>
                        <RecentAnounce>
                            <RecentAnnounceDate><p>5/13</p></RecentAnnounceDate>
                            <p>今天是五月十三號。宜剪髮。</p>
                        </RecentAnounce>
                        <RecentAnounce>
                            <RecentAnnounceDate><p>5/14</p></RecentAnnounceDate>
                            <p>今天是五月十四號。忌收成。</p>
                        </RecentAnounce>
                        <RecentAnounce>
                            <RecentAnnounceDate><p>5/15</p></RecentAnnounceDate>
                            <p>今天是五月十五號。宜嫁娶。</p>
                        </RecentAnounce>
                        <RecentAnounce>
                            <RecentAnnounceDate><p>5/16</p></RecentAnnounceDate>
                            <p>今天是五月十六號。忌沐浴。</p>
                        </RecentAnounce>
                        <RecentAnounce>
                            <RecentAnnounceDate><p>5/17</p></RecentAnnounceDate>
                            <p>今天是五月十七號。宜開業。</p>
                        </RecentAnounce>
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