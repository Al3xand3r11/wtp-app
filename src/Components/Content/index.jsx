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
                <YouTube embedId="I7DpZPa3kYE"/>
            </ContentWrapper>
        </ContentContainer>
            
    );
};

export default Content;