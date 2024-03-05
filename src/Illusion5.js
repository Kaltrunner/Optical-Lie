import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion5() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .5</h1>
        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://e7.pngegg.com/pngimages/603/753/png-clipart-optical-illusion-optics-tunnel-photography-symmetry-thumbnail.png"
          alt="illusion2"
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">Op art – pt.2</h6>
          <p className="illusion-body-info-p">
            Op art, short for optical art, is a style of visual art that uses
            optical illusions. Op artworks are abstract, with many better-known
            pieces created in black and white. Typically, they give the viewer
            the impression of movement, hidden images, flashing and vibrating
            patterns, or swelling or warping.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion5;
