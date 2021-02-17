import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import "../pages/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(props) {
  const { variant, size, label, onClick, color } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        color={color}
        onClick={onClick}
        variant={variant}
        size={size}
        label={label}
      />
    </div>
  );
}
