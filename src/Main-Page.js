import { ScrollToTop } from 'react-router-scroll-to-top';
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page-body-div">

      <div>
        <h1 className="main-div-text">a lie</h1>
      </div>

      <div className="illusion-div">
        <Link to="/Illusion1">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-1"
              src="https://www.rd.com/wp-content/uploads/2018/01/01-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-342149405-Barsukov-Vladimir.jpg?w=640"
              alt="1stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-2"
              src="https://media.istockphoto.com/id/1155208693/vector/geometric-optical-illusion-circle-pattern.jpg?s=612x612&w=0&k=20&c=9CTeHoruOf21tPQ-vJso0YpDvcOvn9HsCYcCtqAFZHI="
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-3"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-psychedelic-pattern-royalty-free-image-1602093995.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-4"
              src="https://www.braingle.com/images/illusions/30387.gif"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-5"
              src="https://e7.pngegg.com/pngimages/603/753/png-clipart-optical-illusion-optics-tunnel-photography-symmetry-thumbnail.png"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-6"
              src="https://www.rd.com/wp-content/uploads/2018/01/09-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-316420799-Cosid.jpg"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion2">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img" id="img-7"
              src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/517167"
              alt="2stillusion"
            />
          </div>
        </Link>

      </div>

      <div className="mainpage-button-div">
        <Link to="/">
          <button className="optical-home-button">optical lie</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default MainPage;
