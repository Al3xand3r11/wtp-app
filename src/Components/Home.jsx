import Contact from "./Contact";
import Members from "./Members";
import NavBar from "./NavBar";
import Content from "./Content";
import { homeContainer } from "../Styles/Home-styled";

const Home = () => {
    return(
        <>
          <homeContainer/>
          <NavBar/>
          <Content/>
          <Members/> 
          <Contact/> 
        </>
    );
};

export default Home;