import styled from 'styled-components';

export const ContentContainer = styled.div`
  color: #ffff;
  height: 800px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: .5fr .5fr .5fr;
  flex-direction: row;
  padding-top: 100px;
`;

export const ContentWrapper = styled.div`
display: grid;
margin-top: 10px;
margin-right: 200px;
margin-bottom: 20px;
padding-left: 50px;
flex-direction: row;
justify-content: space-evenly;
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
