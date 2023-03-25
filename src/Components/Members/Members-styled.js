import styled from "styled-components";

export const MembersContainer = styled.div`
height: 800px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: .5fr .5fr .5fr;
  flex-direction: row;
  align-items: flex-start;
  background: #010606;
  `;

export const MemberWrapper = styled.div`
display: grid;
margin-top: 100px;
margin-right: 100px;
margin-bottom: 20px;
flex-direction: row;
justify-content: space-evenly;
`;


  export const MemberImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  `;