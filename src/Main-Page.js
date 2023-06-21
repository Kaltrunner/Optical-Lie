import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="main-page-body-div">
      <div>
        <h1 className="main-div-text">optical lie [a collection]</h1>
      </div>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <Link to="/Illusion1">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-1"
                  src="https://www.rd.com/wp-content/uploads/2018/01/01-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-342149405-Barsukov-Vladimir.jpg?w=640"
                  alt="1stillusion"
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper faster">
            <Link id="img-round" to="/Illusion2">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-round"
                  src="https://media.istockphoto.com/id/1155208693/vector/geometric-optical-illusion-circle-pattern.jpg?s=612x612&w=0&k=20&c=9CTeHoruOf21tPQ-vJso0YpDvcOvn9HsCYcCtqAFZHI="
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower vertical">
            <Link to="/Illusion3">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-3"
                  src="https://images.squarespace-cdn.com/content/v1/5c45545d12b13fadfc7cf51d/1622662819685-JOVVTXF4781TELUUARQS/unsplash-image--TnlLhj46iQ.jpg?format=1000w"
                  alt="2stillusion"
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower slower-down">
            <Link to="/Illusion4">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-4 img-round"
                  src="https://www.rd.com/wp-content/uploads/2018/01/09-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-316420799-Cosid.jpg"
                  alt="2stillusion"
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper">
            <Link to="/Illusion5">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img"
                  id="img-5"
                  src="https://e7.pngegg.com/pngimages/603/753/png-clipart-optical-illusion-optics-tunnel-photography-symmetry-thumbnail.png"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower">
            <img id="img-round" className="main-img" src="" alt="" />
            <Link id="img-round" to="/Illusion6">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img"
                  id="img-6"
                  src="https://www.braingle.com/images/illusions/30387.gif"
                  alt="2stillusion"
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper faster1">
            <Link to="/Illusion7">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img"
                  id="img-7"
                  src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/517167"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower slower2">
            <Link to="/Illusion8">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-8"
                  src="https://i.pinimg.com/736x/12/1f/1a/121f1ab8b58be04034b75391acf74513.jpg"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper">
            <Link to="/Illusion9">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-9"
                  src="https://cdn.vectorstock.com/i/preview-1x/08/03/wave-of-optical-illusion-abstract-black-and-white-vector-47120803.jpg"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower">
            <Link to="/Illusion10">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-9"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-psychedelic-pattern-royalty-free-image-1602093995.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="img-wrapper slower last">
            <img className="main-img" src="" alt="" />
            <Link to="/Illusion11">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img main-img"
                  id="img-11"
                  src="https://pixfeeds.com/images/26/557029/640-480628178-op-art-painting.jpg"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mainpage-button-div">
        <Link to="/">
          <button className="optical-home-button">home</button>
        </Link>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default MainPage;
