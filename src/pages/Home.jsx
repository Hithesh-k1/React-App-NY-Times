import React, { useEffect, useState } from "react";
import Chips from "../components/Chips";
import SearchBar from "../components/SearchBar";
import { getTopStories, searchArticle } from "../services/apiClient";
import Articles from "./Articles";
import "./Home.css";

const sections = [
  "automobiles",
  "business",
  "fashion",
  "food",
  "health",
  "movies",
  "politics",
  "science",
  "sports",
  "technology",
  "travel",
  "world",
];

function Home() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopStoriesData("home");
  }, []);

  const handleSectionLableClick = (section) => {
    getTopStoriesData(section);
  };

  const getTopStoriesData = (section) => {
    getTopStories(section).then(function (response) {
      // handle success
      setArticles(response?.results);
    });
  };

  const getSearchedArticle = (text) => {
    searchArticle(text).then(function (res) {
      // handle success
      setArticles(res?.response?.docs);
      setLoading(false);
    });
  };

  const SectionLables = () => {
    const Lables = React.Children.toArray(
      sections.map((section) => {
        return (
          <Chips
            onClick={() => handleSectionLableClick(section)}
            color="primary"
            variant="outlined"
            size="medium"
            label={section}
          />
        );
      })
    );
    return Lables;
  };

  return (
    <div>
      <h1 className="logo-text">NY Times</h1>
      <center>
        <SearchBar searchArticles={getSearchedArticle} />
      </center>
      <h2 className="top-stories-text">Top stories</h2>
      <div style={{ marginLeft: "10%", padding: "2%" }}>
        <div style={{ display: "flex" }}>
          <SectionLables />
        </div>
      </div>

      <Articles loading={loading} articles={articles} />
    </div>
  );
}
export default Home;
