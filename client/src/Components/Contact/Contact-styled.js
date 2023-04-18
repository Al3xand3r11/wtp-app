import { Box, Button} from '@mui/material';
import {styled} from '@mui/system'; 
import image from "../../Images/image.jpeg";
export const ContactContainer = styled(Box)({
    height: 800,
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    position: 'relative',

})

export const ContactFormWrapper = styled(Box)({
    height: 400,
    width: 800,
    alignItems: 'center',
    backgroundColor: 'grey',
    backgroundPosition: 'center',
    opacity: '.7',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    
})

export const StyledTextField = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    display: 'grid',
    flexDirection: 'column',

})

export const StyledButton = styled(Button)({

    borderRadius: '10px',
    background: 'black',
})

;