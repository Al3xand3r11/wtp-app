import { MemberImage, MembersContainer, MemberWrapper } from "./Members-styled";
import Brian from "../../Images/Brian.jpeg";
import Caleb from "../../Images/Caleb.jpeg";
import Demarco from "../../Images/Demarco.jpeg";
import Placeholder from "../../Images/Placeholder.jpeg";

const Members = () => {
    return (
        <MembersContainer>
            <MemberWrapper><MemberImage src={Brian}/></MemberWrapper>
            <MemberWrapper><MemberImage src={Demarco}/></MemberWrapper>
            <MemberWrapper><MemberImage src={Caleb}/></MemberWrapper>
            <MemberWrapper><MemberImage src={Placeholder}/></MemberWrapper>
            <MemberWrapper><MemberImage src={Placeholder}/></MemberWrapper>
            <MemberWrapper><MemberImage src={Placeholder}/></MemberWrapper>
        </MembersContainer>
    );
};

export default Members;