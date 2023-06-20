import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page-body-div">
      <div>
        <h1 className="main-div-text">a lie</h1>
      </div>

      {/* <div className="illusion-div">

        <Link to="/Illusion3">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img"
              id="img-3"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-psychedelic-pattern-royalty-free-image-1602093995.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion4">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img"
              id="img-4 img-round"
              src="https://www.braingle.com/images/illusions/30387.gif"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion5">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img"
              id="img-5"
              src="https://e7.pngegg.com/pngimages/603/753/png-clipart-optical-illusion-optics-tunnel-photography-symmetry-thumbnail.png"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion6">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img"
              id="img-6"
              src="https://www.rd.com/wp-content/uploads/2018/01/09-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-316420799-Cosid.jpg"
              alt="2stillusion"
            />
          </div>
        </Link>

        <Link to="/Illusion7">
          <div className="illusion-img-div">
            <img
              className="main-illusion-img"
              id="img-7"
              src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/517167"
              alt="2stillusion"
            />
          </div>
        </Link>
      </div>

      <div className="mainpage-button-div">
        <Link to="/">
          <button className="optical-home-button">home</button>
        </Link>
      </div> */}

      <div class="external">
        <div class="horizontal-scroll-wrapper">
          <div class="img-wrapper slower">
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

          <div class="img-wrapper faster">
            <Link id="img-round" to="/Illusion2">
              <div className="illusion-img-div">
                <img
                  className="main-illusion-img"
                  id="img-2"
                  src="https://media.istockphoto.com/id/1155208693/vector/geometric-optical-illusion-circle-pattern.jpg?s=612x612&w=0&k=20&c=9CTeHoruOf21tPQ-vJso0YpDvcOvn9HsCYcCtqAFZHI="
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div class="img-wrapper slower vertical">
            <img
              className="main-img"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-psychedelic-pattern-royalty-free-image-1602093995.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
              alt=""
            />
          </div>

          <div class="img-wrapper slower slower-down">
            <img
              className="main-img"
              id="img-round"
              src="https://www.braingle.com/images/illusions/30387.gif"
              alt=""
            />
          </div>

          <div class="img-wrapper">
            <img
              className="main-img"
              src="https://e7.pngegg.com/pngimages/603/753/png-clipart-optical-illusion-optics-tunnel-photography-symmetry-thumbnail.png"
              alt=""
            />
          </div>

          <div class="img-wrapper slower">
            <img
              className="main-img"
              src="https://www.rd.com/wp-content/uploads/2018/01/09-Optical-Illusions-That-Will-Make-Your-Brain-Hurt-316420799-Cosid.jpg"
              alt=""
            />
          </div>

          <div class="img-wrapper faster1">
            <img
              className="main-img"
              src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/517167"
              alt=""
            />
          </div>

          <div class="img-wrapper slower slower2">
            <img
              className="main-img"
              src="https://www.hhhlibrary.org/sites/default/files/2022-06/optical_illusion.jpeg"
              alt=""
            />
          </div>

          <div class="img-wrapper">
            <img
              className="main-img"
              src="https://image.fresherslive.com/latestnews/2023/03/want-to-test-your-vision-try-to-find-the-hidden-object-in-this-optical-illusion-640086eaf22db20195211-900.webp"
              alt=""
            />
          </div>

          <div class="img-wrapper slower">
            <img
              className="main-img"
              src="https://images.squarespace-cdn.com/content/v1/5c45545d12b13fadfc7cf51d/1622662819685-JOVVTXF4781TELUUARQS/unsplash-image--TnlLhj46iQ.jpg?format=1000w"
              alt=""
            />
          </div>

          <div class="img-wrapper slower last">
            <img
              className="main-img"
              src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/vortex-optical-illusion-black-and-white-aapshop.jpg?&targetx=-189&targety=-291&imagewidth=1083&imageheight=1083&modelwidth=700&modelheight=500&backgroundcolor=010101&orientation=0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mainpage-button-div">
        <Link to="/">
          <button className="optical-home-button">home</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default MainPage;
