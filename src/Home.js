import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-bidy-div">
      <div className="home-body-text">
        <Link className="optical-text-link" to="/MainPage">
          <h1 className="optical-text">optical lie</h1>
        </Link>
      </div>
      <div className="home-illusion-div">
        <Link to="/ErrorPage" id="home-img">
          <img
            className="home-illusion"
            src="https://www.anythinklibraries.org/sites/default/files/styles/full/public/optical_illusion.jpg?itok=HCr7kBfz"
            alt="spinning optical illistion"
          />
        </Link>
      </div>
      {/* <div className="home-button-div">
        <Link to="/MainPage">
          <button className="enter-button">explore</button>
        </Link>
      </div> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
