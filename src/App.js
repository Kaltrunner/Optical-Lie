import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Home from "./Home";
import ErrorPage from "./Error-Page";
import MainPage from "./Main-Page";
import './index.css';

function App() {
  return (
    <SlideRoutes >
      <Route path="/" element={<Home />} />
      <Route path="/ErrorPage" element={<ErrorPage />} />
      <Route path="/MainPage" element={<MainPage />} />
    
    </SlideRoutes>
  );
}

export default App;
