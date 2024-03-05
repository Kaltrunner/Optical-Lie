import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion2() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .2</h1>

        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          id="img-round"
          src="https://media.istockphoto.com/id/1155208693/vector/geometric-optical-illusion-circle-pattern.jpg?s=612x612&w=0&k=20&c=9CTeHoruOf21tPQ-vJso0YpDvcOvn9HsCYcCtqAFZHI="
          alt="illusion2"
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">
            Fraser spiral illusion – pt.1
          </h6>
          <p className="illusion-body-info-p">
            The Fraser spiral illusion is an optical illusion that was first
            described by the British psychologist Sir James Fraser (1863–1936)
            in 1908. The illusion is also known as the false spiral, or by its
            original name, the twisted cord illusion. The overlapping black arc
            segments appear to form a spiral; however, the arcs are a series of
            concentric circles.
          </p>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Illusion2;
