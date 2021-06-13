import { useParams } from "react-router-dom";
import history from "../services/history";
import "../App.css";

export function Detail() {
  let { workId } = useParams();
  let imageUrl = "images/" + workId + ".jpg";

  return (
    <div className="layout">
      <div className="container__center">
        <article>
          <picture>
            <img src={imageUrl} alt="Work Image" className="article__image" />
          </picture>
        </article>
        <button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Detail;
