import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Home from "./Home";
import ErrorPage from "./Error-Page";
import MainPage from "./Main-Page";
import Illusion1 from "./Illusion1"
import Footer from "./Footer";
import './index.css';

function App() {
  return (
    <SlideRoutes >
      <Route path="/" element={<Home />} />
      <Route path="/ErrorPage" element={<ErrorPage />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Illusion1" element={<Illusion1 />} />
    
    </SlideRoutes>
  );
}

export default App;
