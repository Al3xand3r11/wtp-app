import { ContactContainer, ImageBg } from "./Contact-styled";
import image from "../../Images/image.jpeg";
const Contact = () => {
    return (
        <ContactContainer>
            <ImageBg src={image}/>
        </ContactContainer>
    );
};

export default Contact;