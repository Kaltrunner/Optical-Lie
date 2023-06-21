import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Home from "./Home";
import ErrorPage from "./Error-Page";
import MainPage from "./Main-Page";
import Illusion1 from "./Illusion1";
import Illusion2 from "./Illusion2";
import Illusion3 from "./Illusion3";
import Illusion4 from "./Illusion4";
import Illusion5 from "./Illusion5";
import Illusion6 from "./Illusion6";
import Illusion7 from "./Illusion7";
import Illusion8 from "./Illusion8";
import Illusion9 from "./Illusion9";
import Illusion10 from "./Illusion10";
import Illusion11 from "./Illusion11";
import Footer from "./Footer";
import AnimatedCursor from "react-animated-cursor";
import "./index.css";

function App() {
  return (
    <>
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Illusion1" element={<Illusion1 />} />
        <Route path="/Illusion2" element={<Illusion2 />} />
        <Route path="/Illusion3" element={<Illusion3 />} />
        <Route path="/Illusion4" element={<Illusion4 />} />
        <Route path="/Illusion5" element={<Illusion5 />} />
        <Route path="/Illusion6" element={<Illusion6 />} />
        <Route path="/Illusion7" element={<Illusion7 />} />
        <Route path="/Illusion8" element={<Illusion8 />} />
        <Route path="/Illusion9" element={<Illusion9 />} />
        <Route path="/Illusion10" element={<Illusion10 />} />
        <Route path="/Illusion11" element={<Illusion11 />} />
      </SlideRoutes>
      <AnimatedCursor
        innerSize={42}
        outerSize={42}
        color="225, 225, 225"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.5}
        trailingSpeed={17}
        innerStyle={{
          mixBlendMode: "difference",
        }}
        outerStyle={{
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}

export default App;
