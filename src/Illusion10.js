import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion10() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .10</h1>
        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-psychedelic-pattern-royalty-free-image-1602093995.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
          alt=""
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">
            Fraser spiral illusion – pt.3
          </h6>
          <p className="illusion-body-info-p">
            The illusion is augmented by the spiral components in the checkered
            background. It is a unique illusion, where the observer can verify
            the concentric strands manually. When the strands are highlighted in
            a different colour, it becomes obvious to the observer that no
            spiral is present.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion10;
