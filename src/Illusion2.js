import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion2() {
  return (
    <div className="illusion-body-div">
      <h1 className="illusion-body-text">img .2</h1>
      <img
        className="illusion-image"
        id="img-round"
        src="https://media.istockphoto.com/id/1155208693/vector/geometric-optical-illusion-circle-pattern.jpg?s=612x612&w=0&k=20&c=9CTeHoruOf21tPQ-vJso0YpDvcOvn9HsCYcCtqAFZHI="
        alt="illusion2"
      />
      <div className="illusion-body-info">
        <h6 className="illusion-body-info-h6">Lorem ipsum dolor</h6>
        <p className="illusion-body-info-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <Link to="/MainPage">
          <button className="illusion-home-button">back</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion2;
