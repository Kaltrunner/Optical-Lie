import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion11() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .11</h1>
        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://pixfeeds.com/images/26/557029/640-480628178-op-art-painting.jpg"
          alt=""
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">Op art – pt.4</h6>
          <p className="illusion-body-info-p">
            The Divisionists, a group of Neo-Impressionist painters, attempted
            to increase the apparent luminosity of their paintings through
            recourse to optics and optical illusions. László Moholy-Nagy
            produced photographic op art and taught the subject in the Bauhaus;
            one of his lessons consisted of making his students produce holes in
            cards and then photographing them.
          </p>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Illusion11;
