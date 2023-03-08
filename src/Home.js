import { ScrollToTop } from 'react-router-scroll-to-top';
import { Link } from "react-router-dom";
import Footer from './Footer';


function Home() {
  return (
    <div className="home-bidy-div" >
      <h1 className="optical-text">optical lie</h1>
      <div className="home-button-div">
        <Link to="/ErrorPage">
          <button className="enter-button">enter</button>
        </Link>
      </div>
      <div className="home-illusion-div">
        <img
          className="home-illusion"
          src="https://www.anythinklibraries.org/sites/default/files/styles/full/public/optical_illusion.jpg?itok=HCr7kBfz"
          alt="spinning optical illistion"
        />
      </div>
      {/* <div className="optical-main-button-div">
        <Link to="/MainPage">
          <button className="optical-main-button">optical</button>
        </Link>
      </div> */}
      <Footer />
     <ScrollToTop />
    </div>
  );
}

export default Home;
