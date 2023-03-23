import styled from 'styled-components';

export const ContentContainer = styled.div`
  color: #ffff;
  height: 800px;
`;

export const ContentWrapper = styled.div`
margin-right: auto;
margin-left: auto;
display: grid;
align-items: center;
justify-content: center;
position: absolute;
padding: 0 24px;
`;

export const TextWrapper = styled.div`
max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;