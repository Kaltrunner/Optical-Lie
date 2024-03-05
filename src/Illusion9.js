import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion9() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .9</h1>
        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://cdn.vectorstock.com/i/preview-1x/08/03/wave-of-optical-illusion-abstract-black-and-white-vector-47120803.jpg"
          alt=""
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">Lorem ipsum dolor</h6>
          <p className="illusion-body-info-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion9;
