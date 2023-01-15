import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Techstacks } from "./Components/About/Techstacks";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Mailer } from "./Components/mailer/Mailer";
import Github from "./Components/github/Github";
import { Box } from "@chakra-ui/react";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
        
      </section>
      <main>
        <About />
        
        <section id="#projects">
          <Projects />
        </section>

        {/* git hub stats */}
        <section >
          <Github/>
        </section>
        <Box id="#contact">
          <Contact />
          <Mailer />
        </Box>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

