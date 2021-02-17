import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardActionArea, CardActions } from "@material-ui/core";
import Chips from "./Chips";

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    height: "100%",
  },
  media: {
    height: 200,
  },
});

const Article = (props) => {
  const classes = useStyles();
  const { title, description, alt, src, section, url, original } = props;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={src} title={alt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              {original}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Chips varient="outlined" size="small" label={section} />
          <CardActions>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="top-stories-text"
            >
              Learn More
            </a>
          </CardActions>
        </CardActions>
      </Card>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
