import styled from "styled-components";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Tutorial from "./components/Tutorial";
import LongBanner01 from "./components/LongBanner01";
import Info from "./components/Info";
import Infovideo from "./components/Infovideo";
import Projects from "./components/Projects";
import LongBanner02 from "./components/LongBanner02";
import Procedure from "./components/Procedure";
import Footer from "./components/Footer";

function App() {
  return (
    <AppStyled>
      <Header/>
      <Slider/>
      <Tutorial/>
      <LongBanner01/>
      <Info/>
      <Infovideo/>
      <Projects/>
      <LongBanner02/>
      <Procedure/>
      <Footer/>
    </AppStyled>
  );
}

const AppStyled = styled.div `
    width: 100vw;
    height: 100%;

`;

export default App;
