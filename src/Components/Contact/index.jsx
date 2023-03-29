import { TextField } from "@mui/material";
import { ContactContainer, ContactFormWrapper, StyledTextField} from "./Contact-styled";
const Contact = () => {
    return (
            <ContactContainer> 
            <ContactFormWrapper>
            <TextField
                defaultValue='Win'
            />
            </ContactFormWrapper>
            </ContactContainer>
    );
};

export default Contact;