import React from "react";
import YouTube from "../Youtube";
import { ContentWrapper, ContentText } from "./Content-styled";
const Content = () => {
    return (
            <ContentWrapper>
                <ContentText>Test</ContentText>
                <YouTube embedId="I7DpZPa3kYE"/>
            </ContentWrapper>
            
    );
};

export default Content;