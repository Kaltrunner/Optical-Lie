import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion8() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .8</h1>
        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://i.pinimg.com/736x/12/1f/1a/121f1ab8b58be04034b75391acf74513.jpg"
          alt="illusion2"
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">
            Fraser spiral illusion – pt.2
          </h6>
          <p className="illusion-body-info-p">
            The visual distortion is produced by combining a regular line
            pattern (the circles) with misaligned parts. Zöllner's illusion and
            the café wall illusion are based on a similar principle, like many
            other visual effects, in which a sequence of tilted elements causes
            the eye to perceive phantom twists and deviations.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion8;
