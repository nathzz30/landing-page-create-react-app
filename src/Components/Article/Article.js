/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./Article.css";

const Article = ({ articleImg, articleTitle, articleText, button, alt }) => {
  let but = null;
  if (button) {
    but = (
      <button className="button">
        <b>MORE</b>
      </button>
    );
  }
  return (
    <div className="article">
      <img src={articleImg} alt={alt} className="articleImg" />
      <h2 className="articleTitle">{articleTitle}</h2>
      <p className="articleText">{articleText}</p>
      {but}
    </div>
  );
};

export default Article;
