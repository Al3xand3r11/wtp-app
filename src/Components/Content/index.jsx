import React from "react";
import YouTube from "../Youtube";
import { ContentContainer, ContentWrapper, TextWrapper, Title, TwitterWrapper } from "./Content-styled";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'
const Content = () => {
    return (
        <ContentContainer>
            <TextWrapper>
                <Title/>
            </TextWrapper>
            <ContentWrapper>
                <YouTube embedId="OBtxymRja3E"/>
            </ContentWrapper>
            <TwitterWrapper>
            <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="WTPlayPodcast"
                
            />
            </TwitterWrapper>
        </ContentContainer>
            
    );
};

export default Content;