import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title = ` NewsMonkey - ${capitalsize(props.category)}`;

  const capitalsize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
};
const fetchData = async () => {
  setPage(page + 1);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5e90585b6d984759982073794f28be18&page=1`;
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
  setLoading(false);
  setTotalResults(parsedData.totalResults);
};
const prevbuttoncalled = async () => {
  console.log("Prev button clicked");

  let url = `https://newsapi.org/v2/top-headlines?country=${
    props.country
  }&category=${
    props.category
  }&apiKey=5e90585b6d984759982073794f28be18&page=${page - 1}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
  setPage(page - 1);
  setLoading(false);
  
};

const nextbuttoncalled = async () => {
  console.log("Next button clicked");

  let url = `https://newsapi.org/v2/top-headlines?country=${
    props.country
  }&category=${
    props.category
  }&apiKey=5e90585b6d984759982073794f28be18&page=${page + 1}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
  setPage(page + 1);
  setLoading(false);
  
};
useEffect(() => {
  updateNews();
}, []);

return (
  <>
    <h2>Top Headlines from {capitalsize(props.category)}</h2>

    <InfiniteScroll
      dataLength={articles.length} //This is important field to render the next data
      next={fetchData}
      hasMore={articles.length !== totalResults}
      loader={<h4>Loading...</h4>}
    >
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-3 mx-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  urlToImage={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.google.com/search?q=technews&rlz=1C1KNTJ_enPK976PK976&sxsrf=AJOqlzVOBQEaZprflEL_7MaX4HpX54itiA:1677501694921&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjw7Yrl3LX9AhXMxqQKHa0mCd4Q_AUoAnoECAEQBA&biw=1517&bih=730&dpr=0.9#imgrc=_EQNvi1cMuvvTM"
                  }
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>

    <div className="container d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-dark"
        onClick={prevbuttoncalled}
      >
        Previous
      </button>
      <button
        type="button"
        class="btn btn-dark"
        onClick={nextbuttoncalled}
      >
        Next
      </button>
    </div>
  </>
);

News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
