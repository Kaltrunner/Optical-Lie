import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Illusion7() {
  return (
    <div className="illusion-body-div">
      <h1 className="illusion-body-text">img .7</h1>
      <img
        className="illusion-image"
        src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/517167"
        alt="illusion7"
      />
      <div className="illusion-body-info">
        <h6 className="illusion-body-info-h6">Op art – pt.3</h6>
        <p className="illusion-body-info-p">
          Illusionism, focused on the perception of extended space within a flat
          picture, is found from the earliest points of art history. However,
          the antecedents of op art, in terms of graphic effects and concern for
          exotic optical illusions, can be traced back to Neo-Impressionism,
          Cubism, Futurism, Constructivism and Dada.
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

export default Illusion7;
