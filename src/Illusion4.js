import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

function Illusion4() {
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect(() => {
  //     fetch("/Illusion2", {
  //         method: "PATCH",
  //         headers: {
  //             "content-type": "application/json",
  //         },
  //         body: JSON.stringify({isFavorite : !isFavorite}),
  //     })
  //     .then(res => res.json())
  //     .then((isFavorite) => {
  //         setIsFavorite(isFavorite)
  //     })
  // },[])

  return (
    <div className="illusion-body-div">
      <h1>img .4</h1>
      <img
        className="illusion-image" id="img-round"
        src="https://www.braingle.com/images/illusions/30387.gif"
        alt="illusion2"
      />
      <div>
        <div className="star-button-div">
          {isFavorite ? (
            <button
              onClick={() => setIsFavorite(false)}
              className="illusion-star-button favorite active"
            >
              {" "}
              <img
                className="star-img" 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjI4OGwyLjgzMyA4LjcxOGg5LjE2N2wtNy40MTcgNS4zODkgMi44MzMgOC43MTgtNy40MTYtNS4zODgtNy40MTcgNS4zODggMi44MzMtOC43MTgtNy40MTYtNS4zODloOS4xNjd6Ii8+PC9zdmc+"
                alt="star"
              />
            </button>
          ) : (
            <button
              onClick={() => setIsFavorite(true)}
              className="illusion-star-button favorite"
            >
              <img
                className="star-img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNi43NmwxLjM3OSA0LjI0Nmg0LjQ2NWwtMy42MTIgMi42MjUgMS4zNzkgNC4yNDYtMy42MTEtMi42MjUtMy42MTIgMi42MjUgMS4zNzktNC4yNDYtMy42MTItMi42MjVoNC40NjVsMS4zOC00LjI0NnptMC02LjQ3MmwtMi44MzMgOC43MThoLTkuMTY3bDcuNDE2IDUuMzg5LTIuODMzIDguNzE4IDcuNDE3LTUuMzg4IDcuNDE2IDUuMzg4LTIuODMzLTguNzE4IDcuNDE3LTUuMzg5aC05LjE2N2wtMi44MzMtOC43MTh6Ii8+PC9zdmc+"
                alt="star"
              />
            </button>
          )}
        </div>
        <Link to="/MainPage">
          <button className="illusion-home-button">Home</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Illusion4;