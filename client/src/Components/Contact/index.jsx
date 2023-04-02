import { FormControl, TextField } from "@mui/material";
import { ContactContainer, ContactFormWrapper, StyledTextField} from "./Contact-styled";
const Contact = () => {
    return (
            <ContactContainer> 
            <ContactFormWrapper>
            <StyledTextField>
                <FormControl variant="outlined">
                <TextField sx={{bgcolor: 'grey', fontWeight: 'light'}}
                defaultValue='First Name'
                margin="normal"
            />
            <TextField sx={{bgcolor: 'grey', fontWeight: 'light'}}
                defaultValue='Last Name'
                margin="normal"
            />
            <TextField sx={{bgcolor: 'grey', fontWeight: 'light'}}
                defaultValue='Email'
                margin="normal"
            />
                </FormControl>
            
            </StyledTextField>
            </ContactFormWrapper>
            
            
            </ContactContainer>
    );
};

export default Contact;