import React from "react";
import YouTube from "../Youtube";
import { ContentContainer, ContentWrapper, TextWrapper, Title } from "./Content-styled";
const Content = () => {
    return (
        <ContentContainer>
            <TextWrapper>
                <Title/>
            </TextWrapper>
            <ContentWrapper>
                <YouTube embedId="OBtxymRja3E"/>
            </ContentWrapper>
        </ContentContainer>
            
    );
};

export default Content;