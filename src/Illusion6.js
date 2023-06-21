import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion6() {
  return (
    <div className="illusion-body-div">
      <h1 className="illusion-body-text">img .6</h1>
      <img
        id="img-round"
        className="illusion-image"
        src="https://www.braingle.com/images/illusions/30387.gif"
        alt="illusion2"
      />
      <div className="illusion-body-info">
        <h6 className="illusion-body-info-h6">Wundt illusion</h6>
        <p className="illusion-body-info-p">
          The Wundt illusion is an optical illusion that was first described by
          the German psychologist Wilhelm Wundt in the 19th century. The four
          vertical lines are all straight, but they may look as if they are
          bowed inwards to some observers. The distortion is induced by the
          crooked lines on the background, as in the Orbison illusion. The
          Hering illusion produces a similar, but inverted effect.
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

export default Illusion6;
