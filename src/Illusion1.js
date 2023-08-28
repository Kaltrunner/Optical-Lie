import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";

function Illusion1() {
  return (
    <div className="illusion-body-div">
      <div className="illusion-body-header">
        <h1 className="illusion-body-text">img .1</h1>

        <Link to="/MainPage">
          <button className="illusion-home-button">✕</button>
        </Link>
      </div>
      <div className="illusion-img-text-div">
        <img
          className="illusion-image"
          src="https://www.rd.com/wp-content/uploads/2018/01/01-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-342149405-Barsukov-Vladimir.jpg?w=640"
          alt=""
        />
        <div className="illusion-body-info">
          <h6 className="illusion-body-info-h6">Café wall illusion</h6>
          <p className="illusion-body-info-p">
            The café wall illusion, also known as the Münsterberg illusion, is a
            geometrical-optical illusion in which the parallel straight dividing
            lines between staggered rows with alternating dark and light
            "bricks" appear to be sloped, not parallel as they really are.
          </p>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Illusion1;
