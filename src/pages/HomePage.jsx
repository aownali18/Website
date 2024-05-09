import React from "react";
import Baner from "../componets/Home/Baner";
import About from "../componets/Home/About";
import Skills from "../componets/Home/Skills";
import Footer from "../componets/Footer/Footer";
import Resume from "../componets/Home/Resume";
function HomePage() {
  return (
    <div>
      <Baner />
      <About />
      <Skills />
      <Resume />
      <Footer />
    </div>
  );
}

export default HomePage;
