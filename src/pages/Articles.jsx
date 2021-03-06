import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Article from "../components/Article";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    height: "100%",
  },
  media: {
    height: 300,
  },
});

export default function Articles({ loading, articles }) {
  const classes = useStyles();
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {articles &&
              React.Children.toArray(
                articles.map((article) => (
                  <Grid item xs={12} sm={4} key={article._id}>
                    <Article
                      title={article?.headline?.main || article?.title}
                      description={article?.snippet || article.abstract}
                      src={
                        article.multimedia?.[0]?.url.includes("https")
                          ? article.multimedia?.[0]?.url
                          : `https://nytimes.com/${article.multimedia?.[0]?.url}`
                      }
                      alt={article.title}
                      section={article?.news_desk || article.section}
                      url={article.web_url || article.url}
                      original={article.byline.original}
                    />
                  </Grid>
                ))
              )}
          </Grid>
        </div>
      )}
    </>
  );
}

Articles.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
