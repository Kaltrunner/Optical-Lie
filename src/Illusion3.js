import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion3() {
  return (
    <div className="illusion-body-div">
      <h1 className="illusion-body-text">img .3</h1>
      <img
        className="illusion-image"
        src="https://images.squarespace-cdn.com/content/v1/5c45545d12b13fadfc7cf51d/1622662819685-JOVVTXF4781TELUUARQS/unsplash-image--TnlLhj46iQ.jpg?format=1000w"
        alt=""
      />
      <div className="illusion-body-info">
        <h6 className="illusion-body-info-h6">Op art – pt.1</h6>
        <p className="illusion-body-info-p">
          Not to be confused with pop art, plop art, or OOPArt. For "operational
          art", as used in military terminology, see Operational level of war.
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

export default Illusion3;
