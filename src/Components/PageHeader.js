import { Typography, makeStyles, Paper, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    // marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3C44B1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
  shape: {
    borderRadius: "10px",
  },
}));

function PageHeader(props) {
  const { title, subTitle, icon } = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} square>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <Card elevation={0} className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </Card>
      </div>
    </Paper>
  );
}

export default PageHeader;
