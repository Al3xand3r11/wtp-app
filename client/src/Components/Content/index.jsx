import React from "react";
import YouTube from "../Youtube";
import { ContentContainer, ContentWrapper } from "./Content-styled";
import {TwitterTimelineEmbed } from 'react-twitter-embed'
const Content = () => {
    return (
        <ContentContainer>
            <ContentWrapper>
                <YouTube embedId="OBtxymRja3E"/>
            </ContentWrapper>
            <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="WTPlayPodcast"
                options={{height: 600}}
            />

                

            
        </ContentContainer>
            
    );
};

export default Content;