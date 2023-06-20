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
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
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
    </SlideRoutes>
  );
}

export default App;
